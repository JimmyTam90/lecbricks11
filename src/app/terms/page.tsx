import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: SITE.base + "/terms" } };
export default function Page() {
  return (<main id="main" className="legal"><h1>Terms of Use</h1><p>This page is an informational guide provided as is, without warranties. Product details, availability, shipping and return terms are set by the merchant, LetBricks, and may change. PrimeGearLab does not sell products, process payments or fulfil orders. Products shown are independent MOC designs and are not affiliated with or endorsed by the LEGO Group.</p></main>);
}
