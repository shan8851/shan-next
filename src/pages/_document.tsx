import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme='cyberpunk'>
      <Head>
        {/* Open Graph tags */}
        <meta property="og:title" content="Shan8851" />
        <meta property="og:description" content="Web developer, consultant and mentor" />
        <meta property="og:image" content="/shan-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shan8851.com" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shan8851" />
        <meta name="twitter:description" content="Web developer, consultant and mentor" />
        <meta name="twitter:image" content="/shan-1200/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
