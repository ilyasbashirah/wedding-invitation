import { ReactElement } from "react";
import style from "./style.module.scss";
import { Color } from "@/src/styles/typescript/types/color";

type Variant =
  | "heading-1-regular"
  | "heading-2-regular"
  | "heading-3-bold"
  | "subtitle-1-bold"
  | "subtitle-2-bold"
  | "subtitle-2-semibold"
  | "body-1-bold"
  | "body-1-semibold"
  | "body-1-medium"
  | "body-2-semibold"
  | "body-3-bold"
  | "body-3-medium"
  | "body-4-medium"
  | "body-5-bold"
  | "body-5-medium"
  | "caption-1-bold"
  | "button-2-bold";

type Align = "left" | "right" | "center";
const Typography = ({
  children,
  variant = "heading-2-regular",
  align = "left",
  color = "light-gray",
  paragraph = true,
  family = "montserrat",
  id = "typography",
}: {
  children?: string;
  variant?: Variant;
  align?: Align;
  color?: Color;
  device?: string;
  paragraph?: boolean;
  family?: "montserrat" | "greatvibes";
  id?: string;
}): ReactElement => {
  const deviceFontVariant: string = `typography--${variant}`;

  const fontStyles: string = `${style.typography} ${
    style[`typography-color--${color}`]
  } ${style[deviceFontVariant]} ${style[`typography-align--${align}`]} ${
    style[`typography-family--${family}`]
  }
`;

  return (
    <>
      {paragraph ? (
        <div id={id} className={fontStyles}>{`${children}`}</div>
      ) : (
        <span id={id} className={fontStyles}>{`${children}`}</span>
      )}
    </>
  );
};

export default Typography;
