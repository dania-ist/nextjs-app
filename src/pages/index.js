import Head from "next/head";
import DefaultLayout from "@/components/default-layout";
import HomeBody from "@/components/pages/home/HomeBody";
import AfterEffect from "@/components/layout/AfterEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="pt-xxl-5 pt-4"></div>
        <HomeBody />
      </div>
      <AfterEffect/>
      <div className="ellipse-top-left z-0"></div>
      <div className="ellipse-bottom-right z-0"></div>
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
