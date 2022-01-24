import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";
import { useRouter } from "next/router";
import VenueExplanation from "@/src/products/landing/features/success/venueexplanation";
import VenueMaps from "@/src/products/landing/features/success/venuemaps";
export interface MapsLocationProps {}

export default function MapsLocation({
  language = "ID",
}: {
  language?: string;
}) {
  const [state, setState] = useState({
    lang: "ID",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const textDatas = {
    title: {
      en: "The Wedding Day",
      id: "Acara Pernikahan",
    },
    doa: {
      en: "We’re Getting Hitched! And We’d Be Delighted If You Could Join Our Wedding!",
      id: "Dengan memanjatkan puji syukur serta memohon ridho dan rahmat Allah SWT kami bermaksud menyelenggarakan Syukuran Pernikahan pada:",
    },
    date: {
      en: "Tuesday, February 1st 2022",
      id: "Selasa, 1 Februari 2022",
    },
  };

  const translate = state.lang.toLowerCase().includes("en") ? "en" : "id";
  const titleText: string = textDatas.title[translate];
  const prayText: string = textDatas.doa[translate];
  const dateText: string = textDatas.date[translate];
  return (
    <div
      id={"venue-maps-location"}
      className={style["section-maps-location-title"]}
    >
      <Typography
        variant={"heading-2-regular"}
        color={"cooper"}
        family={"greatvibes"}
        align={"center"}
      >
        {titleText}
      </Typography>
      <div className={style["section-maps-location-description"]}>
        <Typography
          variant={"body-1-medium"}
          color={"onyx"}
          family={"montserrat"}
          align={"center"}
        >
          {prayText}
        </Typography>
        <Typography
          variant={"subtitle-2-bold"}
          color={"cooper"}
          family={"montserrat"}
          align={"center"}
        >
          {dateText}
        </Typography>

        <div className={style["section-card-maps-location"]}>
          <VenueMaps />
          <VenueExplanation language={language} />
        </div>
      </div>
    </div>
  );
}
