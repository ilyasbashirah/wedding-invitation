import { useState } from "react";
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

export interface ILandingPage {}

export default function LandingPage(props: ILandingPage) {
  const [state, setState] = useState({
    modalKirimHadiah: false,
    language: "EN",
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
  return (
    <div>
      <NavigationbarWedding switchLanguageTo={handleSwitchLanguage} />
      <Counting language={state.language} />
      <BrideGroom language={state.language} />
      <Banner
        height={"venue-and-protocol"}
        align={"flex-start"}
        background={"/desktop/venueandprotocol/venueandprotocol_background.svg"}
      >
        <Section gap={44} align={"flex-start"} justify={"center"}>
          <MapsLocation language={state.language} />
          <HealthProtocol language={state.language} />
        </Section>
      </Banner>
      <OurGallery language={state.language} />
      <WeddingGift
        handleClickKirimHadiah={handleKirimHadiah}
        language={state.language}
      />
      <Closing language={state.language} />
      <Footer />

      {/* modal payment */}
      <PaymentAccountModal
        open={state.modalKirimHadiah}
        handleBatalKirimHadiah={handleCloseKirimHadiah}
      />
      {/* end modal payment */}
    </div>
  );
}
