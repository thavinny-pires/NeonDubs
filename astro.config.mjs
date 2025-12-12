// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  image: {
    service: passthroughImageService()
  },
  site: "https://neon-dubs.vercel.app/",
  integrations: [mdx(), sitemap(), icon()],
});
