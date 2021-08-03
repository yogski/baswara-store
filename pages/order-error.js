import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";
import NextNavbar from "../components/Navbar";
import OrderErrorMessageComponent from "../components/OrderErrorMessageComponent";

export default function OrderError() {
  return (
    <div className={style.container}>
      <Head>
        <title lang="en-us">Truck Signs Error at payment</title>
        <meta
          name="description"
          content="This page is shown because an error in payment was produced."
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href="https://truck-signs-frontend-nextjs.vercel.app/order-error/" />

      </Head>

      <main>
        <OrderErrorMessageComponent />
      </main>
    </div>
  );
}
