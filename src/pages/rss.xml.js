import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "@constants";

export async function GET(context) {
  const dubs = await getCollection("dubs");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: dubs.map((dub) => ({
      ...dub.data,
      link: `/dubs/${dub.id}/`,
    })),
  });
}
