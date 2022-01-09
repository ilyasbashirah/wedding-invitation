import { useState } from "react";
import { useRouter } from "next/router";

import style from "./style.module.scss";

export interface CountingProps {}

export default function Counting(props: CountingProps) {
  type textDatas = {
    en: string;
    ina: string;
  };
  const countingDownDatas: textDatas = {
    en: "ounting times for wedding party",
    ina: "Menghitung menuju hari bahagia",
  };
  const nameDatas: textDatas = {
    en: "Yasmin & Bas",
    ina: "Yasmin & Bas",
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
      ina: "Hari",
    },
    jam: {
      en: "Hours",
      ina: "Jam",
    },
    menit: {
      en: "Minutes",
      ina: "Menit",
    },
    detik: {
      en: "Seconds",
      ina: "Detik",
    },
  };
  const router = useRouter();
  const routePathname: string = router.pathname;
  const nameText: string = routePathname.includes("en")
    ? nameDatas.en
    : nameDatas.ina;
  const countingText: string = routePathname.includes("en")
    ? countingDownDatas.en
    : nameDatas.ina;

  type StateType = {
    hari: string;
    jam: string;
    menit: string;
    detik: string;
  };
  const [state, setState] = useState<StateType>({
    hari: "29",
    jam: "6",
    menit: "3",
    detik: "2",
  });
  const hariText: string = routePathname.includes("en")
    ? timerWordingDatas.hari.en
    : timerWordingDatas.hari.ina;
  const jamText: string = routePathname.includes("en")
    ? timerWordingDatas.jam.en
    : timerWordingDatas.jam.ina;
  const menitText: string = routePathname.includes("en")
    ? timerWordingDatas.menit.en
    : timerWordingDatas.menit.ina;
  const detikText: string = routePathname.includes("en")
    ? timerWordingDatas.detik.en
    : timerWordingDatas.detik.ina;
  const timeText = [hariText, jamText, menitText, detikText];
  return (
    <div className={style["container-counting"]}>
      <img
        src={"/desktop/introduction/countingdown_illustration.svg"}
        alt={"bride-and-groom"}
        width={"100%"}
        height={"100%"}
      />
      <div className={style["box-tulisan"]}>{nameText}</div>
      <div className={style["box-tulisan"]}>{countingText}</div>
      <div className={style["container-timer"]}>
        {Object.keys(state).map((item, index) => (
          <div
            key={`box-timer-${timeText[index]}`}
            className={style["box-timer"]}
          >
            <div>{state[item]}</div>
            <div>{timeText[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
