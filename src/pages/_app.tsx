import type { AppProps } from "next/app";
import "../styles/global.scss";
import LayoutPrimary from "@/layouts/primary";
import portfolio from "@/data/portfolio.json";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{portfolio.metadata.title}</title>
        <meta name="description" content={portfolio.metadata.description} />
      </Head>

      <LayoutPrimary>
        <Component {...pageProps} />
      </LayoutPrimary>
    </>
  );
}
