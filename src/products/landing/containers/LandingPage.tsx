import { useState } from "react";
import style from "./style.module.scss";
import Counting from "@/src/products/landing/features/success/countingdown";
import BrideGroom from "@/src/products/landing/features/success/brideandgroom";
import MapsLocation from "@/src/products/landing/features/success/mapslocation";
import HealthProtocol from "@/src/products/landing/features/success/healthprotocol";
import OurGallery from "../features/success/ourgallery/OurGallery";
import WeddingGift from "../features/success/weddinggift/WeddingGift";
import Closing from "../features/success/closing/Closing";
import Banner from "@/src/components/Banner";
import Section from "@/src/components/Section";
import Footer from "@/src/products/landing/features/success/footer";
import NavigationbarWedding from "@/src/products/landing/features/success/navigation_bar_wedding/NavigationBarWedding";
import PaymentAccountModal from "@/src/products/landing/features/success/payment_account_modal/PaymentAccountModal";
import OpenInvitation from "../features/success/open_invitation/OpenInvitation";
import { useScrollSpy } from "@/hooks";
import CarouselModal from "../features/success/carousel_modal/CarouselModal";

export interface ILandingPage {}

export default function LandingPage(props: ILandingPage) {
  const sound = "https://images.bribrain.com/bas/wedding-audio.mp3";

  const [state, setState] = useState({
    modalKirimHadiah: false,
    language: "ID",
    audio: "",
    openInvitation: false,
    modalSelengkapnya: false,
  });

  const handleKirimHadiah = () => {
    setState({ ...state, modalKirimHadiah: true });
  };
  const handleCloseKirimHadiah = (condition: boolean) => {
    setState({ ...state, modalKirimHadiah: condition });
  };
  const handleSwitchLanguage = (lang: string) => {
    setState({ ...state, language: lang });
  };
  const handleOpenInvitation = () => {
    new Audio(sound).play();
    setState({ ...state, openInvitation: true });
  };

  const ids = [
    "counting-down",
    "bride-and-groom",
    "venue-maps-location",
    "health-protocol",
    "our-gallery",
    "wedding-gift",
  ];
  const activeId = useScrollSpy(ids, 54);

  const handleClickSelengkapnya = () => {
    setState({ ...state, modalSelengkapnya: true });
  };
  const handleCloseModalSelengkapnya = () => {
    setState({ ...state, modalSelengkapnya: false });
  };
  return (
    <div>
      <OpenInvitation
        language={state.language}
        openInvitation={handleOpenInvitation}
      />
      <div
        className={`${
          state.openInvitation
            ? style["wrapper--active"]
            : style["wrapper--inactive"]
        }`}
      >
        <NavigationbarWedding
          activeId={activeId}
          switchLanguageTo={handleSwitchLanguage}
        />
        <Counting activeId={activeId} language={state.language} />
        <BrideGroom activeId={activeId} language={state.language} />
        <Banner
          height={"venue-and-protocol"}
          align={"flex-start"}
          background={
            "/desktop/venueandprotocol/venueandprotocol_background.svg"
          }
        >
          <Section gap={44} align={"flex-start"} justify={"center"}>
            <MapsLocation activeId={activeId} language={state.language} />
            <HealthProtocol activeId={activeId} language={state.language} />
          </Section>
        </Banner>
        <OurGallery
          activeId={activeId}
          language={state.language}
          clickSelengkapnya={handleClickSelengkapnya}
        />
        <WeddingGift
          activeId={activeId}
          handleClickKirimHadiah={handleKirimHadiah}
          language={state.language}
        />
        <Closing activeId={activeId} language={state.language} />
        <Footer />

        {/* modal payment */}
        <PaymentAccountModal
          language={state.language}
          open={state.modalKirimHadiah}
          handleBatalKirimHadiah={handleCloseKirimHadiah}
        />
        {/* end modal payment */}

        {state.modalSelengkapnya && (
          <CarouselModal
            closeModalAction={handleCloseModalSelengkapnya}
            openModalGallery={state.modalSelengkapnya}
          />
        )}
      </div>
    </div>
  );
}
