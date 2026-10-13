// Static audit: every <a> with an affiliate href must carry target=_blank + rel=noopener noreferrer.
// Usage: next start & curl -s http://localhost:3000/letbricks | node scripts/audit-links.mjs
import { readFileSync } from "node:fs";
const html = readFileSync(0, "utf8");
const anchors = [...html.matchAll(/<a\s[^>]*href="([^"]*letbricks\.com[^"]*)"[^>]*>/g)];
let bad = 0;
for (const [tag, href] of anchors) {
  const ok = href.includes("ref=kfjtocxz") && /target="_blank"/.test(tag) && /rel="noopener noreferrer"/.test(tag);
  if (!ok) { bad++; console.error("FAIL", href); }
}
console.log(`${anchors.length} affiliate anchors, ${bad} failing`);
process.exit(bad ? 1 : 0);
