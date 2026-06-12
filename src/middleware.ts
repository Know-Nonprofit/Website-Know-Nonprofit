import { defineMiddleware } from "astro:middleware";
import { getRelativeLocaleUrl } from "astro:i18n";
import routes from "@i18n/routes.json";

// Valid first-segment routes that actually exist in each locale
const esRoutes = new Set(["", "404", "privacidad", "terminos", "cookies", "voluntariado", "blog", "proyectos"]);
const enRoutes = new Set(["", "404", "privacy", "terms", "cookies", "volunteering", "blog", "projects"]);

// Maps for detecting wrong-language routes on matching-locale URLs
// e.g., ES user on /projects/ → redirect to /en/projects/
const esToEnRedirect: Record<string, string> = {};
const enToEsRedirect: Record<string, string> = {};
for (const [enKey, esVal] of Object.entries(routes.es)) {
  esToEnRedirect[enKey] = esVal;
}
for (const [esKey, enVal] of Object.entries(routes.en)) {
  enToEsRedirect[esKey] = enVal;
}

export const onRequest = defineMiddleware(async (ctx, next) => {
  try {
    ctx.locals.clientIp =
      ctx.request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      ctx.clientAddress ??
      "unknown"
  } catch {
    ctx.locals.clientIp =
      ctx.request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  }

  const pathname = ctx.url.pathname;

  // Bypass middleware for API routes and static files (robots.txt, sitemap, images, etc.)
  if (pathname.startsWith("/api/") || /\.[a-zA-Z0-9]{2,5}$/.test(pathname)) return next();

  if (!ctx.preferredLocale) return next();
  const locale = ctx.preferredLocale;
  const isEs = locale === "es";
  const isEnUrl = pathname.startsWith("/en/") || pathname === "/en";

  // Extract the current slug without locale prefix
  const slug = isEnUrl
    ? pathname.replace("/en", "").replace(/^\//, "").replace(/\/$/, "")
    : pathname.replace(/^\//, "").replace(/\/$/, "");

  // For multi-segment paths (e.g., blog/post-1), check only the first segment
  const firstSegment = slug.split('/')[0];

  // Language matches URL → let pass, but redirect if route belongs to the other language
  if (isEs && !isEnUrl) {
    if (esToEnRedirect[firstSegment] && !esRoutes.has(firstSegment)) {
      const rest = slug.substring(firstSegment.length);
      return ctx.redirect(getRelativeLocaleUrl("en", firstSegment + rest));
    }
    return next();
  }
  if (!isEs && isEnUrl) {
    if (enToEsRedirect[firstSegment] && !enRoutes.has(firstSegment)) {
      const rest = slug.substring(firstSegment.length);
      return ctx.redirect(getRelativeLocaleUrl("es", firstSegment + rest));
    }
    return next();
  }

  // Spanish user on /en/ → redirect to Spanish equivalent
  if (isEs && isEnUrl) {
    if (!esRoutes.has(firstSegment)) return ctx.redirect("/404");
    const esSlug = routes.es[firstSegment] ?? firstSegment;
    const rest = slug.substring(firstSegment.length);
    return ctx.redirect(getRelativeLocaleUrl("es", esSlug + rest));
  }

  // Non-Spanish user on non-/en/ → redirect to /en/ equivalent
  if (!isEs && !isEnUrl) {
    if (!enRoutes.has(firstSegment)) return ctx.redirect(getRelativeLocaleUrl("en", "404"));
    const enSlug = routes.en[firstSegment] ?? firstSegment;
    const rest = slug.substring(firstSegment.length);
    return ctx.redirect(getRelativeLocaleUrl("en", enSlug + rest));
  }

  return next();
});
