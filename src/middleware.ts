import { defineMiddleware } from "astro:middleware";
import { getRelativeLocaleUrl } from "astro:i18n";
import routes from "@i18n/routes.json";

// Known routes derived from routes.json + special pages
const esRoutes = new Set(["", "404", ...Object.keys(routes.es), ...Object.keys(routes.en)]);
const enRoutes = new Set(["", "404", ...Object.keys(routes.en), ...Object.keys(routes.es)]);

export const onRequest = defineMiddleware(async (ctx, next) => {
  ctx.locals.clientIp =
    ctx.request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    ctx.clientAddress ??
    "unknown"

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

  // Language matches URL → let pass
  if (isEs && !isEnUrl) return next();
  if (!isEs && isEnUrl) return next();

  // Spanish user on /en/ → redirect to Spanish equivalent
  if (isEs && isEnUrl) {
    if (!esRoutes.has(slug)) return ctx.redirect("/404");
    const esSlug = routes.es[slug] ?? slug;
    return ctx.redirect(getRelativeLocaleUrl("es", esSlug));
  }

  // Non-Spanish user on non-/en/ → redirect to /en/ equivalent
  if (!isEs && !isEnUrl) {
    if (!enRoutes.has(slug)) return ctx.redirect(getRelativeLocaleUrl("en", "404"));
    const enSlug = routes.en[slug] ?? slug;
    return ctx.redirect(getRelativeLocaleUrl("en", enSlug));
  }

  return next();
});