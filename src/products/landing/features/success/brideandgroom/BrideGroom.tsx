import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import Banner from "@/src/components/Banner";
import Section from "@/src/components/Section";
import Typography from "@/src/components/Typography";
export interface BrideGroomProps {}

export default function BrideGroom({ language = "EN" }: { language?: string }) {
  const [state, setState] = useState({
    lang: "EN",
  });
  const titleDatas = {
    en: "Bride & Groom",
    id: "Mempelai",
  };
  const quoteDatas = {
    meaning: {
      en: "And of everything We have created pairs, that you may remember (the Grace of Allah).",
      id: "Dan dari segala sesuatu Kami ciptakan berpasang-pasangan, agar kamu mengingat (Rahmat Allah).",
    },
    surah: {
      en: "QS Adh-Dhariyat : 49",
      id: "QS Adh-Dhariyat : 49",
    },
  };
  const brideAndGroomDatas = {
    brideName: {
      en: "Yasmin Meidiana Syarif, S.T.",
      id: "Yasmin Meidiana Syarif, S.T.",
    },
    brideIdentity: {
      en: "The daughter of Mr. Aswin Gunther Sharif & Mrs. Sintya Liana Sofyan",
      id: "Putri dari Bapak Aswin Gunther Sharif, S.E., Ak. & Ibu Sintya Liana Sofyan, S.H., M.Kn.",
    },
    brideInstagram: {
      en: "@yasminsyrf",
      id: "@yasminsyrf",
    },
    groomName: {
      en: "Moh. Ilyas Bashirah Putra Arya, S.T.",
      id: "Moh. Ilyas Bashirah Putra Arya, S.T.",
    },
    groomIdentity: {
      en: "The son of Achmad Suyono & Mrs. Suntari",
      id: "Putra dari Bapak Achmad Suyono, S.Sos & Ibu Suntari",
    },
    groomInstagram: {
      en: "@milyasbpa",
      id: "@milyasbpa",
    },
  };
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);

  const translate = state.lang.toLowerCase().includes("en") ? "en" : "id";
  const titleText: string = titleDatas[translate];
  const quoteMeaningText: string = quoteDatas.meaning[translate];
  const quoteSurahText: string = quoteDatas.surah[translate];

  const brideNameText: string = brideAndGroomDatas.brideName[translate];
  const brideIdentityText: string = brideAndGroomDatas.brideIdentity[translate];
  const groomNameText: string = brideAndGroomDatas.groomName[translate];
  const groomIdentityText: string = brideAndGroomDatas.groomIdentity[translate];
  return (
    <Banner
      id={"bride-and-groom"}
      height={"bride-and-groom"}
      align={"flex-start"}
      justify={"center"}
      background={"/desktop/brideandgroom/brideandgroom_background.svg"}
    >
      <Section gap={32} align={"flex-start"} justify={"center"}>
        <Typography
          variant={"heading-2-regular"}
          color={"cooper"}
          family={"greatvibes"}
          align={"center"}
        >
          {titleText}
        </Typography>
        <Section gap={0} align={"flex-start"} justify={"center"}>
          <Typography
            variant={"body-1-medium"}
            color={"onyx"}
            family={"montserrat"}
            align={"center"}
          >
            {quoteMeaningText}
          </Typography>
          <Section gap={12} align={"flex-start"} justify={"center"}>
            <Typography
              variant={"body-1-medium"}
              color={"onyx"}
              family={"montserrat"}
              align={"center"}
            >
              {quoteSurahText}
            </Typography>
            <Section gap={0} align={"flex-start"} justify={"center"}>
              <div className={style["container-bride-photos"]}>
                <img src={"/desktop/brideandgroom/brideandgroom_yasmin.png"} />
                <div className={style["container-identity"]}>
                  <Typography
                    variant={"subtitle-1-bold"}
                    color={"onyx"}
                    family={"montserrat"}
                  >
                    {brideNameText}
                  </Typography>
                  <Typography
                    variant={"body-1-medium"}
                    color={"onyx"}
                    family={"montserrat"}
                  >
                    {brideIdentityText}
                  </Typography>
                </div>
              </div>

              <div className={style["container-groom-photos"]}>
                <div className={style["container-identity"]}>
                  <Typography
                    variant={"subtitle-1-bold"}
                    color={"onyx"}
                    family={"montserrat"}
                  >
                    {groomNameText}
                  </Typography>
                  <Typography
                    variant={"body-1-medium"}
                    color={"onyx"}
                    family={"montserrat"}
                  >
                    {groomIdentityText}
                  </Typography>
                </div>
                <img src={"/desktop/brideandgroom/brideandgroom_bas.png"} />
              </div>
            </Section>
          </Section>
        </Section>
      </Section>
    </Banner>
  );
}
