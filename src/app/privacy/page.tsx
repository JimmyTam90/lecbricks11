import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: SITE.base + "/privacy" } };
export default function Page() {
  return (<main id="main" className="legal"><h1>Privacy Policy</h1><p>PrimeGearLab does not sell personal data. This page may use optional analytics (Google Analytics, Google Ads, Meta Pixel) only when configured by the site owner; these tools may set cookies and collect usage data such as pages viewed and link clicks. When you follow a link to LetBricks, that site is governed by its own privacy policy. Questions: {SITE.email}.</p></main>);
}
