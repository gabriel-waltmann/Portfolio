import portfolio from "@/data/portfolio.json";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={portfolio.metadata.language}>
      <Head>
        <link rel="icon" href="icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content={portfolio.metadata.keywords.join(", ")}
        ></meta>
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
