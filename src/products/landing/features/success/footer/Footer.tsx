import * as React from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  const textFooter =
    "© 2022 PT Bajo Digital Innovation | Contact us for reservation";
  return (
    <div className={style["container-footer"]}>
      <Typography
        family={"montserrat"}
        variant={"body-1-semibold"}
        color={"dark-liver"}
        align={'center'}
      >
        {textFooter}
      </Typography>
    </div>
  );
}
