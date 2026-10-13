import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "Affiliate Disclosure", alternates: { canonical: SITE.base + "/affiliate-disclosure" } };
export default function Page() {
  return (<main id="main" className="legal"><h1>Affiliate Disclosure</h1><p>PrimeGearLab participates in the LetBricks affiliate program. Links to the merchant carry a referral code, and we may earn a commission on qualifying purchases at no additional cost to you. This does not influence the prices you pay. We do not guarantee that a commission is attributed on every purchase.</p></main>);
}
