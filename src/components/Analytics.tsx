import Script from "next/script";

const ga = process.env.NEXT_PUBLIC_GA4_ID;
const ads = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const meta = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/** Optional, deferred, non-blocking. Renders nothing when env vars are unset. */
export default function Analytics() {
  const gid = ga || ads;
  return (
    <>
      {gid && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gid}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">{`
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
window.gtag=gtag;gtag('js',new Date());
${ga ? `gtag('config','${ga}');` : ""}${ads ? `gtag('config','${ads}');` : ""}`}</Script>
        </>
      )}
      {meta && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${meta}');fbq('track','PageView');`}</Script>
      )}
    </>
  );
}
