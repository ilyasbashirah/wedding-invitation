import * as React from "react";
import style from "./style.module.scss";
export interface CardProps {
  children?: React.ReactNode;
  padding?: boolean;
}

export default function Card({
  children = <div />,
  padding = true,
}: CardProps) {
  return (
    <div className={style["container-outside-card"]}>
      <div
        className={`${style["container-inside-card"]} ${
          padding
            ? style["container-inside-card--padding"]
            : style["container-inside-card--no-padding"]
        }`}
      >
        {children}
      </div>
    </div>
  );
}
