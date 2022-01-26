import { useState, useEffect } from "react";
import Card from "@/src/components/Card";
import Typography from "@/src/components/Typography";

import style from "./style.module.scss";
import Button from "@/src/components/Button";

export interface VenueExplanationProps {}

export default function VenueExplanation({
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
    akad: {
      title: {
        en: "Wedding Ceremony",
        id: "Akad Nikah",
        icon: "",
      },
      datas: [
        {
          en: "InterContinental Bandung Dago Pakar Hotel",
          id: "Hotel InterContinental Bandung Dago Pakar",
          icon: "venue_hotel.svg",
        },
        {
          en: "11.00 - 14.00 WIB",
          id: "11.00 - 14.00 WIB",
          icon: "venue_clock.svg",
        },
        {
          en: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
          id: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
          icon: "venue_point.svg",
        },
      ],
    },
    resepsi: {
      title: {
        en: "Wedding Reception",
        id: "Resepsi",
        icon: "",
      },
      datas: [
        {
          en: "InterContinental Bandung Dago Pakar Hotel",
          id: "Hotel InterContinental Bandung Dago Pakar",
          icon: "venue_hotel.svg",
        },
        {
          en: "11.00 - 14.00 WIB",
          id: "11.00 - 14.00 WIB",
          icon: "venue_clock.svg",
        },
        {
          en: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
          id: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
          icon: "venue_point.svg",
        },
      ],
    },
    buttonText: {
      en: "Live Streaming",
      id: "Siaran Langsung",
    },
  };
  const handleClickLinkStreaming = () => {
    window.location.replace("https://youtu.be/h2_no1Rr1rw");
  };
  return (
    <Card>
      <div className={style["container-venue-explanation"]}>
        <div className={style["container-list-info"]}>
          <div className={style["container-list-info"]}>
            <Typography
              // key={`venue-explanation-${key}`}
              family={"montserrat"}
              variant={"body-1-bold"}
              color={"cooper"}
            >
              {textDatas["akad"]["title"][state.lang.toLowerCase()]}
            </Typography>
            {textDatas.akad.datas.map((item: any, index: number) => {
              return (
                <div
                  key={`venue-explanation-${index}`}
                  className={style["venue-list-explanation"]}
                >
                  <img
                    src={`/desktop/venueandprotocol/venue/icons/${item["icon"]}`}
                  />
                  <Typography
                    family={"montserrat"}
                    variant={"body-4-medium"}
                    color={"cooper"}
                  >
                    {item[state.lang.toLowerCase()]}
                  </Typography>
                </div>
              );
            })}
          </div>

          <div className={style["container-list-info"]}>
            <Typography
              family={"montserrat"}
              variant={"body-1-bold"}
              color={"cooper"}
            >
              {textDatas["resepsi"]["title"][state.lang.toLowerCase()]}
            </Typography>
            {textDatas.akad.datas.map((item: any, index: number) => {
              return (
                <div
                  key={`venue-explanation-${index}`}
                  className={style["venue-list-explanation"]}
                >
                  <img
                    src={`/desktop/venueandprotocol/venue/icons/${item["icon"]}`}
                  />
                  <Typography
                    family={"montserrat"}
                    variant={"body-4-medium"}
                    color={"cooper"}
                  >
                    {item[state.lang.toLowerCase()]}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={style["section-button"]}
          onClick={handleClickLinkStreaming}
        >
          <Button text={textDatas.buttonText[state.lang.toLowerCase()]} />
        </div>
      </div>
    </Card>
  );
}
