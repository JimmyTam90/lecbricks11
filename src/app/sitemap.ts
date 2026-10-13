import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms", "/affiliate-disclosure", "/contact"].map((p) => ({ url: SITE.base + p }));
}
