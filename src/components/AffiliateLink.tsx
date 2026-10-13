"use client";
import type { ReactNode } from "react";
import { resolveAffiliateUrl } from "@/lib/affiliate";

declare global { interface Window { gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void; dataLayer?: unknown[] } }

function track(key: string, placement: string) {
  try {
    window.gtag?.("event", "affiliate_click", { collection: key, placement });
    window.fbq?.("trackCustom", "AffiliateClick", { collection: key, placement });
  } catch { /* analytics must never affect navigation */ }
}

/** Real <a>, always new tab. Never preventDefault, never router/window.location. */
export default function AffiliateLink({ linkKey, placement, className, children, label }: {
  linkKey?: string; placement: string; className?: string; children: ReactNode; label?: string;
}) {
  const { href } = resolveAffiliateUrl(linkKey);
  if (!href) return <span className={className} aria-disabled="true">Currently unavailable</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}
      aria-label={label ? `${label} (opens in a new tab)` : undefined}
      onClick={() => track(linkKey ?? "default", placement)}>
      {children}
    </a>
  );
}
