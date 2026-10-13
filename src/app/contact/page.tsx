import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "Contact", alternates: { canonical: SITE.base + "/contact" } };
export default function Page() {
  return (<main id="main" className="legal"><h1>Contact</h1><p>Email us at <a href={"mailto:" + SITE.email}>{SITE.email}</a>. For orders, shipping or returns, please contact the merchant, LetBricks, directly.</p></main>);
}
