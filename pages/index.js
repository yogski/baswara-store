import Head from "next/head";
import style from "../styles/Home.module.css";
import NextNavbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import { Container } from "react-bootstrap";


export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title lang="en-us">Baswara Store</title>
        <meta
          name="description"
          content="Toko Baswara"
        />
        <meta property="og:title" content="Baswara Store" />
        <meta
          property="og:description"
          content="Katalog E-Commerce Baswara"
        />
        <meta
          property="og:url"
          content="https://yogski.github.io/"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.png" />
        <link
          rel="preload"
          href="/fonts/Sansation/Sansation_Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Bench Nine/BenchNine-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Bench Nine/BenchNine-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Bench Nine/BenchNine-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Acumin/Acumin.ttf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="canonical"
          href="https://www.signsfortrucks.com/"
        />
      </Head>

      <main className={style.main}>
        <HomePage />
      </main>
    </div>
  );
}
