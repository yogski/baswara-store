import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";
import ProductDetailGrid from "../../../components/ProductDetailGrid";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // NOTE Components
  return id == undefined || id == null ? (
    <div></div>
  ) : (
    <div className={styles.container}>
      <Head>
        <title lang="en-us">Truck Signs Adhesive Vinyl Product</title>
        <meta
          name="description"
          content="In here the adhesive vinal can be customized."
        />
         <meta
          property="og:title"
          content="Truck Signs Adhesive Vinyl Product"
        />
        <meta
          property="og:description"
          content="In here the adhesive vinal can be customized."
        />
        <meta
          property="og:url"
          content={`https://www.signsfortrucks.com/product/${id}/`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="canonical"
          href={`https://www.signsfortrucks.com/product/${id}/`}
        />
      </Head>

      <main className={styles.main}>
        <ProductDetailGrid id={id} />
      </main>
    </div>
  );
}

