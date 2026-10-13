import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.base + "/"),
  title: { default: "Collector MOC Brick Sets Guide | PrimeGearLab", template: "%s | PrimeGearLab" },
  description: "An independent collector's guide to MOC building sets: castles, trains, engines, race cars and more, from the LetBricks store.",
  alternates: { canonical: SITE.base },
  openGraph: { type: "website", url: SITE.base, siteName: SITE.brand, locale: "en_US", title: "Collector MOC Brick Sets Guide | PrimeGearLab" },
};
export const viewport: Viewport = { themeColor: "#0F172A", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="hdr">
          <div className="wrap hdr-in">
            {/* /letbricks/logo.png is not present in the project, so a text mark is used. */}
            <Link href="/" className="brand" aria-label="PrimeGearLab home">
              <span className="mark" aria-hidden="true">P</span><span>PrimeGearLab</span>
            </Link>
          </div>
        </header>
        {children}
        <footer className="ftr">
          <div className="wrap">
            <p className="disc">Disclosure: PrimeGearLab is an independent guide and may earn a commission when you buy through links on this page, at no extra cost to you. Not affiliated with or endorsed by the LEGO Group.</p>
            <nav aria-label="Legal">
              <Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link>
              <Link href="/affiliate-disclosure">Affiliate Disclosure</Link><Link href="/contact">Contact</Link>
            </nav>
            <p className="muted">© {new Date().getFullYear()} PrimeGearLab</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
