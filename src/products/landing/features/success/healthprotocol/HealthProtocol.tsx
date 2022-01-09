import * as React from "react";
import style from "./style.module.scss";

export interface HealthProtocolProps {}

export default function HealthProtocol(props: HealthProtocolProps) {
  const textDatas = {
    title: {
      en: "Health Protocol",
      ina: "Protokol Kesehatan",
    },
    description: {
      en: "We keep this wedding event safe from the risk of Covid-19 transmission, please pay attention to the following recommendations during the event:",
      ina: "Kami menjaga agar acara pernikahan ini aman dari risiko penularan Covid-19, mohon perhatikan anjuran berikut selama acara berlangsung:",
    },
    aspect: {
      mask: {
        en: "Must use masks during the event a Mask",
        ina: "Menggunakan masker selama acara berlangsung",
      },
      soap: {
        en: "Wash your hands frequently, using soap for about 20 seconds",
        ina: "Cuci tangan rutin dengan sabun selama minimal 20 detik",
      },
      distance: {
        en: "Keep distance from others min 1,5 meters",
        ina: "Saling menjaga jarak dengan orang sekitar minimal 1,5 meter",
      },
    },
  };
  return (
    <div>
      <div></div>
    </div>
  );
}
