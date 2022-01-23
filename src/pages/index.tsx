import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../products/landing/containers/LandingPage";
import { useDevice } from "@/hooks";

const Home: NextPage = () => {
  const title: string = "Wedding Invitation Bas & Yasmin";
  const device: "mobile" | "desktop" | undefined = useDevice();
  const mobile = device === "mobile";
  const desktop = device === "desktop";
  const handleLinkMobile = () => {
    window.location.replace("https://m-wedding-yasmin-bas.herokuapp.com/");
  };
  if (desktop) {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <LandingPage />
      </>
    );
  }
  if (mobile) {
    handleLinkMobile();
  }
  return <div />;
};

export default Home;
