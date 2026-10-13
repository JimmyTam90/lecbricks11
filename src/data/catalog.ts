const IMG = "https://www.letbricks.com/wp-content/uploads/";

export interface Collection {
  key: string; title: string; blurb: string;
  image?: { src: string; alt: string };
}

// Images are official merchant thumbnails fetched during inspection. Where none was verified,
// the card shows an honest themed placeholder instead of a guessed image. No prices/ratings are claimed.
export const COLLECTIONS: Collection[] = [
  { key: "medieval-castle", title: "Medieval Castles", blurb: "Castles, taverns and fortified towns, with hundreds of designs from independent MOC creators.",
    image: { src: IMG + "2021/07/letbricks-moc-68151-medieval-lions-castle-product-handle-1.jpg", alt: "Medieval Lions' Castle MOC building set" } },
  { key: "military-sets", title: "Military MOC Sets", blurb: "Vehicles and scenes for collectors who like historical detail." },
  { key: "train-sets", title: "Train Sets", blurb: "Locomotives and rolling stock for display and play.",
    image: { src: IMG + "2021/09/letbricks-moc-19554-union-pacific-4014-big-boy-4.jpg", alt: "Union Pacific 4014 Big Boy MOC train model" } },
  { key: "technic-vehicles", title: "Technic Vehicles", blurb: "Mechanical, engineering-style builds with moving parts." },
  { key: "engine-models", title: "Engine Models", blurb: "Detailed engine replicas for the desk or shelf.",
    image: { src: IMG + "2024/12/letbricks-MA-61895-RB-30-L6-3.0L-SOHC-Inline-Six-cylinder-Four-stroke-Gasoline-Engine-Model1985PCSby-Ronald-Tewes-6.jpg", alt: "RB30 L6 inline-six engine model, 1985 pieces" } },
  { key: "racing-cars", title: "Racing Cars", blurb: "Race and sports car builds for adult collectors.",
    image: { src: IMG + "2025/12/letbricks-japanese-lemans-legend-racecar-building-blocks-set-1427pcs-by-pingubricks-14-2.jpg", alt: "Japanese Le Mans legend race car building set, 1427 pieces" } },
  { key: "modular-buildings", title: "Modular Buildings", blurb: "Street-scene architecture to combine into a display." },
  { key: "fantasy-sets", title: "Fantasy Sets", blurb: "Dragons, towers and imaginative worlds." },
];

export const FAQ = [
  { q: "Do I buy from PrimeGearLab?", a: "No. PrimeGearLab is an independent guide. You purchase from the merchant, LetBricks, on its own website, and the merchant handles orders, shipping and returns." },
  { q: "Is shipping free?", a: "The merchant advertises free shipping on most orders. Eligibility and conditions are set by the merchant, so please confirm at checkout." },
  { q: "What is the return policy?", a: "The merchant advertises a 30-day money-back guarantee. Check the merchant's current policy before you buy." },
  { q: "Are there assembly instructions?", a: "The merchant states that sets include QR-code digital assembly instructions. Confirm on the product page for the set you choose." },
  { q: "Are these official LEGO products?", a: "No. These are independent MOC (my own creation) designs from third-party creators and are not affiliated with or endorsed by the LEGO Group." },
];
