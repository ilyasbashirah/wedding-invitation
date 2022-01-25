import { useState, useEffect } from "react";
import Typography from "@/src/components/Typography";
import Banner from "@/src/components/Banner";
import Button from "@/src/components/Button";
import style from "./style.module.scss";

export interface OpenInvitationProps {}

export default function OpenInvitation({
  language = "ID",
  openInvitation,
}: {
  language?: string;
  openInvitation?: () => void;
}) {
  type textDatas = {
    en: string;
    id: string;
  };
  const countingDownDatas: textDatas = {
    en: "Counting times for wedding party",
    id: "Menghitung menuju hari bahagia",
  };
  const nameDatas: textDatas = {
    en: "Yasmin & Bas",
    id: "Yasmin & Bas",
  };

  const buttonDatas: textDatas = {
    en: "Open Invitation",
    id: "Buka Undangan",
  };

  const [state, setState] = useState({
    lang: "ID",
    slideTop: false,
  });

  const nameText: string = state.lang.toLowerCase().includes("en")
    ? nameDatas.en
    : nameDatas.id;

  const buttonText: string = state.lang.toLowerCase().includes("en")
    ? buttonDatas.en
    : buttonDatas.id;

  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);

  const handleOpenInvitation = () => {
    setState({ ...state, slideTop: true });
    openInvitation();
  };
  return (
    <Banner
      slideTop={state.slideTop}
      height={"open-invitation"}
      background={"/desktop/countingdown/countingdown_background.svg"}
    >
      <img
        src={"/desktop/countingdown/countingdown_illustration.svg"}
        alt={"bride-and-groom"}
        width={"100%"}
        height={"100%"}
      />
      <Typography
        family={"greatvibes"}
        variant={"heading-1-regular"}
        color={"cooper"}
      >
        {nameText}
      </Typography>

      <div className={style["container-time-date"]}>
        <div className={style["box-list"]}>
          <img src={"/open_invitation/calendar.svg"} />
          <Typography
            family={"montserrat"}
            variant={"body-1-medium"}
            color={"onyx"}
          >
            {"01 Februari 2022 "}
          </Typography>
        </div>
      </div>
      <Button text={buttonText} onClick={handleOpenInvitation} />
    </Banner>
  );
}
