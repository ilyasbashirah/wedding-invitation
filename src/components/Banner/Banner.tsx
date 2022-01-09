import * as React from "react";
import style from "./style.module.scss";
export interface BannerProps {
  children?: JSX.Element;
  bg?: string;
}

export default function Banner({ children, bg = "" }: BannerProps) {
  return <div style={{ background: `url(${bg})` }}>{children}</div>;
}
