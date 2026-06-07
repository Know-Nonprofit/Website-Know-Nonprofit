import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://knownonprofit.tasy.work",
  output: "server",
  adapter: vercel(),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
        },
      },
      serialize: (page) => {
        const skip = ["/api/"]
        if (skip.some((p) => page.url.startsWith(p))) return undefined
        return page
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
