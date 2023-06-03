import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";
import NextNavbar from "../components/Navbar";
import PricesGrid from "../components/PricesGrid";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title lang="en-us">Prices at Baswara Store Website</title>
        <meta
          name="description"
          content="Prices of all products to buy at Truck Signs website."
        />
         <meta
          property="og:title"
          content="Prices at Baswara Store Website"
        />
        <meta
          property="og:description"
          content="Prices of all products to buy at Truck Signs website."
        />
        <meta
          property="og:url"
          content="https://www.signsfortrucks.com/prices/"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href="https://www.signsfortrucks.com/prices/" />

      </Head>

      <main>
        <PricesGrid />
      </main>
    </div>
  );
}
