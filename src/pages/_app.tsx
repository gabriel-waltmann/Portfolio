import type { AppProps } from "next/app";
import "../styles/global.scss";
import LayoutPrimary from "@/layouts/primary";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gabriel Waltmann</title>
      </Head>

      <LayoutPrimary>
        <Component {...pageProps} />
      </LayoutPrimary>
    </>
  );
}
