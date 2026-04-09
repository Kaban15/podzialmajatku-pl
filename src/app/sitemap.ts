import type { MetadataRoute } from "next";

const BASE_URL = "https://podzialmajatku.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/rozwod`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/spadek`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/zniesienie-wspolwlasnosci`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
