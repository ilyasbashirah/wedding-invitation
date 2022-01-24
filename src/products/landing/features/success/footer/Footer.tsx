import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";

export interface FooterProps {}

export default function Footer({ language = "ID" }: { language?: string }) {
  const [state, setState] = useState({
    lang: "ID",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const textDatas = {
    footerText: {
      en: "© 2022 PT Bajo Digital Innovation | Contact us for reservation",
      id: "© 2022 PT Bajo Digital Innovation | Hubungi kami untuk reservasi",
    },
  };
  const handleContactViaWa = () => {
    window.location.replace("https://wa.me/081395729386");
  };
  return (
    <div className={style["container-footer"]} onClick={handleContactViaWa}>
      <Typography
        family={"montserrat"}
        variant={"body-1-semibold"}
        color={"dark-liver"}
        align={"center"}
      >
        {textDatas.footerText[state.lang.toLowerCase()]}
      </Typography>
      <img src={"/desktop/footer/icons/whatsapp.svg"} alt={"whatsapp-icon"} />
    </div>
  );
}
