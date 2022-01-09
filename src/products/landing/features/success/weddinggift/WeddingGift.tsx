import * as React from "react";
import style from "./style.module.scss";

export interface WeddingGiftProps {}

export default function WeddingGift(props: WeddingGiftProps) {
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
      ina: "Silakan klik button berikut untuk mengirimkan",
    },
    buttonKirim: {
      en: "Send Gift",
      ina: "Kirim Hadiah",
    },
  };
  return (
    <div>
      <div></div>
    </div>
  );
}
