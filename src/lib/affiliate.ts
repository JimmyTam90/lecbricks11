export const AFFILIATE_REF = "kfjtocxz";
export const DEFAULT_AFFILIATE_URL = "https://www.letbricks.com/?ref=kfjtocxz";
const MERCHANT_HOST = "www.letbricks.com";

export type ResolveStatus =
  | "MAPPING_PROVIDED"
  | "URL_SYNTAX_VALID"
  | "DESTINATION_NOT_RUNTIME_VERIFIED"
  | "DESTINATION_RUNTIME_VERIFIED"
  | "INVALID_INPUT"
  | "BLOCKED_MISSING_AFFILIATE_URL";

export interface Destination { url: string; verified: boolean }

// Real merchant /product-category/ paths (the supplied military-theme and train-theme slugs returned 404).
// verified=true: fetched directly with HTTP 200 during inspection; false: listed in merchant navigation only.
export const DEEP_LINKS: Record<string, Destination> = {
  "medieval-castle": { url: "https://www.letbricks.com/product-category/shop-by-theme/medieval-theme/?ref=kfjtocxz", verified: true },
  "military-sets": { url: "https://www.letbricks.com/product-category/shop-by-theme/military-moc/?ref=kfjtocxz", verified: false },
  "train-sets": { url: "https://www.letbricks.com/product-category/shop-by-theme/train/?ref=kfjtocxz", verified: false },
  "technic-vehicles": { url: "https://www.letbricks.com/product-category/shop-by-theme/tech-moc/?ref=kfjtocxz", verified: true },
  "engine-models": { url: "https://www.letbricks.com/product-category/shop-by-theme/engine-moc/?ref=kfjtocxz", verified: false },
  "racing-cars": { url: "https://www.letbricks.com/product-category/car/moc-racing-cars-for-adults/?ref=kfjtocxz", verified: false },
  "modular-buildings": { url: "https://www.letbricks.com/product-category/shop-by-theme/modern-build/?ref=kfjtocxz", verified: true },
  "fantasy-sets": { url: "https://www.letbricks.com/product-category/shop-by-theme/fantasy/?ref=kfjtocxz", verified: true },
  "all-products": { url: "https://www.letbricks.com/shop/?ref=kfjtocxz", verified: true },
};

export interface Resolved { href: string | null; status: ResolveStatus }

function valid(u: string): boolean {
  try {
    const p = new URL(u);
    return p.protocol === "https:" && p.hostname === MERCHANT_HOST && p.searchParams.get("ref") === AFFILIATE_REF;
  } catch { return false; }
}

/** Priority: specific mapping key -> DEFAULT_AFFILIATE_URL -> no clickable CTA. Never returns "#". */
export function resolveAffiliateUrl(key?: string): Resolved {
  const d = key ? DEEP_LINKS[key] : undefined;
  if (d) {
    if (!valid(d.url)) return fallback("INVALID_INPUT");
    return { href: d.url, status: d.verified ? "DESTINATION_RUNTIME_VERIFIED" : "DESTINATION_NOT_RUNTIME_VERIFIED" };
  }
  return fallback(key ? "INVALID_INPUT" : "MAPPING_PROVIDED");
}

function fallback(reason: ResolveStatus): Resolved {
  if (valid(DEFAULT_AFFILIATE_URL)) return { href: DEFAULT_AFFILIATE_URL, status: reason === "MAPPING_PROVIDED" ? "URL_SYNTAX_VALID" : reason };
  return { href: null, status: "BLOCKED_MISSING_AFFILIATE_URL" };
}
