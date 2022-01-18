import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../products/landing/containers/LandingPage";

const Home: NextPage = () => {
  const title: string = "Wedding Invitation Bas & Yasmin";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {typeof window !== undefined ? <LandingPage /> : <div />}
    </>
  );
};

export default Home;
