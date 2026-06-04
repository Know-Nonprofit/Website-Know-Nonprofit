import { defineMiddleware } from "astro:middleware";
import { getRelativeLocaleUrl } from "astro:i18n";
import routes from "@i18n/routes.json";

// Known routes derived from routes.json + special pages
const esRoutes = new Set(["", "404", ...Object.keys(routes.es), ...Object.keys(routes.en)]);
const enRoutes = new Set(["", "404", ...Object.keys(routes.en), ...Object.keys(routes.es)]);

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

  // Bypass middleware for API routes
  if (pathname.startsWith("/api/")) return next();

  const locale = ctx.preferredLocale ?? "en";
  const isEs = locale === "es";
  const isEnUrl = pathname.startsWith("/en/") || pathname === "/en";

  // Extract the current slug without locale prefix
  const slug = isEnUrl
    ? pathname.replace("/en", "").replace(/^\//, "").replace(/\/$/, "")
    : pathname.replace(/^\//, "").replace(/\/$/, "");

  // For multi-segment paths (e.g., blog/post-1), check only the first segment
  const firstSegment = slug.split('/')[0];

  // Language matches URL → let pass
  if (isEs && !isEnUrl) return next();
  if (!isEs && isEnUrl) return next();

  // Spanish user on /en/ → redirect to Spanish equivalent
  if (isEs && isEnUrl) {
    if (!esRoutes.has(firstSegment)) return ctx.redirect("/404");
    const esSlug = routes.es[firstSegment] ?? firstSegment;
    // For multi-segment paths, redirect to the collection index (slugs differ per language)
    if (slug.includes('/')) {
      return ctx.redirect(getRelativeLocaleUrl("es", esSlug));
    }
    return ctx.redirect(getRelativeLocaleUrl("es", esSlug));
  }

  // Non-Spanish user on non-/en/ → redirect to /en/ equivalent
  if (!isEs && !isEnUrl) {
    if (!enRoutes.has(firstSegment)) return ctx.redirect(getRelativeLocaleUrl("en", "404"));
    const enSlug = routes.en[firstSegment] ?? firstSegment;
    // For multi-segment paths, redirect to the collection index (slugs differ per language)
    if (slug.includes('/')) {
      return ctx.redirect(getRelativeLocaleUrl("en", enSlug));
    }
    return ctx.redirect(getRelativeLocaleUrl("en", enSlug));
  }

  return next();
});
