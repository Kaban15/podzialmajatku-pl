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
      url: `${BASE_URL}/postepowanie-dzialowe`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/spadki`,
      lastModified: new Date("2026-04-18"),
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
      url: `${BASE_URL}/baza-wiedzy`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/aktualnosci`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/o-nas`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
