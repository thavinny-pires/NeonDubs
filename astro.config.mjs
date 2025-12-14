// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig, passthroughImageService } from "astro/config";
import path from "node:path";

export default defineConfig({
  site: "https://neon-dubs.vercel.app/",
  image: {
    service: passthroughImageService(),
  },
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    resolve: {
      alias: {
        "@pvt-assets": path.resolve("./src/assets"),
      },
    },
  },
});