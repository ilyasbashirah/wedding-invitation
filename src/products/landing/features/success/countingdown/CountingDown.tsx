import { useState, useEffect } from "react";
import Typography from "@/src/components/Typography";
import Banner from "@/src/components/Banner";

import style from "./style.module.scss";

export interface CountingProps {}

export default function Counting({
  language = "ID",
  activeId = "",
}: {
  language?: string;
  activeId?: string;
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
  type timeWordingType = {
    hari: textDatas;
    jam: textDatas;
    menit: textDatas;
    detik: textDatas;
  };
  const timerWordingDatas: timeWordingType = {
    hari: {
      en: "Days",
      id: "Hari",
    },
    jam: {
      en: "Hours",
      id: "Jam",
    },
    menit: {
      en: "Minutes",
      id: "Menit",
    },
    detik: {
      en: "Seconds",
      id: "Detik",
    },
  };

  type StateType = {
    time: {
      hari: number;
      jam: number;
      menit: number;
      detik: number;
    };

    lang: string;
  };

  const yearNow = new Date().getFullYear();
  const difference = +new Date(`02/01/${yearNow}`) - +new Date();
  const [state, setState] = useState<StateType>({
    time: {
      hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
      jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
      menit: Math.floor((difference / 1000 / 60) % 60),
      detik: Math.floor((difference / 1000) % 60),
    },
    lang: "ID",
  });
  useEffect(() => {
    const interval = setTimeout(() => {
      const tahun = new Date().getFullYear();
      const selisih = +new Date(`02/01/${tahun}`) - +new Date();
      const hariCalculation = Math.floor(selisih / (1000 * 60 * 60 * 24));
      const jamCalculation = Math.floor((selisih / (1000 * 60 * 60)) % 24);
      const menitCalculation = Math.floor((selisih / 1000 / 60) % 60);
      const detikCalculation = Math.floor((selisih / 1000) % 60);
      setState({
        ...state,
        time: {
          ...state.time,
          hari: hariCalculation,
          jam: jamCalculation,
          menit: menitCalculation,
          detik: detikCalculation,
        },
      });
    }, 1000);
    return () => clearTimeout(interval);
  }, [state.time]);
  const nameText: string = state.lang.toLowerCase().includes("en")
    ? nameDatas.en
    : nameDatas.id;
  const countingText: string = state.lang.toLowerCase().includes("en")
    ? countingDownDatas.en
    : countingDownDatas.id;
  const hariText: string = state.lang.toLowerCase().includes("en")
    ? timerWordingDatas.hari.en
    : timerWordingDatas.hari.id;
  const jamText: string = state.lang.toLowerCase().includes("en")
    ? timerWordingDatas.jam.en
    : timerWordingDatas.jam.id;
  const menitText: string = state.lang.toLowerCase().includes("en")
    ? timerWordingDatas.menit.en
    : timerWordingDatas.menit.id;
  const detikText: string = state.lang.toLowerCase().includes("en")
    ? timerWordingDatas.detik.en
    : timerWordingDatas.detik.id;
  const timeText = [hariText, jamText, menitText, detikText];

  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  return (
    <Banner
      height={"counting-down"}
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
      <Typography
        family={"montserrat"}
        variant={"body-1-medium"}
        color={"onyx"}
      >
        {countingText}
      </Typography>
      <div className={style["container-timer"]}>
        {Object.keys(state.time).map((item, index) => (
          <div
            key={`box-timer-${timeText[index]}`}
            className={style["box-timer"]}
          >
            <Typography
              family={"montserrat"}
              color={"cooper"}
              variant={"heading-3-bold"}
            >
              {state.time[item]}
            </Typography>
            <Typography
              family={"montserrat"}
              color={"cooper"}
              variant={"body-3-medium"}
            >
              {timeText[index]}
            </Typography>
          </div>
        ))}
      </div>
    </Banner>
  );
}
