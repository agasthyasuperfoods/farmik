import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Farmik</title>
        <meta property="og:title" content="Farmik" />
        <meta name="twitter:title" content="Farmik" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.farmikfoods.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

