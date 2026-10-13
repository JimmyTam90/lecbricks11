import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { COLLECTIONS, FAQ } from "@/data/catalog";

const HERO = COLLECTIONS.find((c) => c.key === "racing-cars")!.image!;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero wrap">
        <div>
          <p className="eyebrow">Collector showcase</p>
          <h1>Display-worthy MOC brick sets for adult builders</h1>
          <p className="lead">Browse castles, trains, engines and race cars from independent MOC designers, sold by LetBricks.</p>
          <ul className="perks">
            <li>Free shipping on most orders</li>
            <li>30-day money-back guarantee</li>
            <li>QR-code digital assembly instructions</li>
          </ul>
          <AffiliateLink linkKey="all-products" placement="hero" className="btn">Shop all sets</AffiliateLink>
          <p className="fine">Perks are advertised by the merchant; confirm terms at checkout.</p>
        </div>
        <Image className="hero-img" src={HERO.src} alt={HERO.alt} width={640} height={640} priority sizes="(max-width:800px) 100vw, 480px" />
      </section>

      <section className="wrap" aria-labelledby="cols">
        <h2 id="cols">Shop by theme</h2>
        <div className="grid">
          {COLLECTIONS.map((c) => (
            <article className="card" key={c.key}>
              {c.image ? (
                <Image src={c.image.src} alt={c.image.alt} width={400} height={400} sizes="(max-width:600px) 100vw, 280px" />
              ) : (
                <div className="ph" role="img" aria-label={`${c.title} collection`}>{c.title}</div>
              )}
              <div className="body"><h3>{c.title}</h3><p>{c.blurb}</p></div>
              <AffiliateLink linkKey={c.key} placement="card" className="btn sm" label={`Browse ${c.title}`}>Browse {c.title}</AffiliateLink>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap faq" aria-labelledby="faq">
        <h2 id="faq">Frequently asked questions</h2>
        {FAQ.map((f) => (<details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>))}
      </section>

      <div className="sticky"><AffiliateLink linkKey="all-products" placement="sticky" className="btn">Shop all sets</AffiliateLink></div>
    </main>
  );
}
