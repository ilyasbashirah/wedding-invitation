import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Banner from "@/src/components/Banner";
import Typography from "@/src/components/Typography";
import { useRouter } from "next/router";
import Section from "@/src/components/Section";
import Button from "@/src/components/Button";
// import Modal from "@/src/components/Modal";

export interface WeddingGiftProps {
  onClick: () => void;
}

export default function WeddingGift({
  language = "EN",
  handleClickKirimHadiah,
}: {
  language?: string;
  handleClickKirimHadiah: () => void;
}) {
  const [state, setState] = useState({
    lang: "EN",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);

  const textDatas = {
    title: {
      en: "Wedding Gift",
      ina: "Wedding Gift",
    },
    description1: {
      en: "For family and friends who would like to send cashless gift. We would be glad to receive it. ",
      ina: "Tanpa mengurangi rasa hormat, apabila keluarga dan teman-teman ingin memberikan hadiah cashless. Kami akan dengan senang hati menerimanya",
    },
    description2: {
      en: "Tap the following button to send to us",
      ina: "Silakan klik tombol berikut untuk mengirimkan",
    },
    buttonKirim: {
      en: "Send Gift",
      ina: "Kirim Hadiah",
    },
  };

  const translate = state.lang.toLowerCase().includes("en") ? "en" : "ina";
  const titleText: string = textDatas.title[translate];
  const description1Text: string = textDatas.description1[translate];
  const description2Text: string = textDatas.description2[translate];
  const textButton: string = textDatas.buttonKirim[translate];
  const handleOpenModalKirimHadiah = () => {
    if (handleClickKirimHadiah) {
      handleClickKirimHadiah();
    }
  };
  return (
    <Banner
      id={"wedding-gift"}
      height={"wedding-gift"}
      align={"flex-start"}
      justify={"center"}
      background={"/desktop/weddinggift/weddinggift_background.svg"}
    >
      <Section gap={36} align={"flex-start"} justify={"center"}>
        <Typography
          variant={"heading-2-regular"}
          color={"cooper"}
          family={"greatvibes"}
          align={"center"}
        >
          {titleText}
        </Typography>
        <Typography
          variant={"body-1-medium"}
          color={"onyx"}
          family={"montserrat"}
          align={"center"}
        >
          {description1Text}
        </Typography>
        <Typography
          variant={"body-1-medium"}
          color={"onyx"}
          family={"montserrat"}
          align={"center"}
        >
          {description2Text}
        </Typography>
        <Button text={textButton} onClick={handleOpenModalKirimHadiah} />
      </Section>
    </Banner>
  );
}
