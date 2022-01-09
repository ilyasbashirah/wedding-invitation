import { ReactElement } from "react";
import style from "./style.module.scss";
import { Color } from "@/src/styles/typescript/types/color";

type Variant =
  | "heading-1-medium"
  | "heading-1-demibold"
  | "heading-1-bold"
  | "heading-2-medium"
  | "heading-2-demibold"
  | "heading-2-bold"
  | "heading-3-medium"
  | "heading-3-demibold"
  | "heading-3-bold"
  | "subtitle-1-medium"
  | "subtitle-1-demibold-1"
  | "subtitle-1-demibold-2"
  | "subtitle-bold"
  | "subtitle-2-medium"
  | "subtitle-2-demibold"
  | "subtitle-2-bold"
  | "subtitle-3-medium-1"
  | "subtitle-3-medium-2"
  | "subtitle-3-demibold"
  | "subtitle-3-bold-1"
  | "subtitle-3-bold-2"
  | "subtitle-3-regular"
  | "subtitle-4-medium"
  | "subtitle-4-demibold"
  | "subtitle-4-bold"
  | "body-regular"
  | "body-medium-1"
  | "body-medium-2"
  | "body-medium-3"
  | "body-demibold-1"
  | "body-demibold-2"
  | "body-bold"
  | "caption-regular"
  | "caption-medium"
  | "caption-demibold"
  | "caption-bold";

type Align = "left" | "right" | "center";
const Typography = ({
  children,
  ...props
}: {
  children?: string;
  variant?: Variant;
  align?: Align;
  color?: Color;
  device?: string;
  paragraph?: boolean;
}): ReactElement => {
  const deviceFontVariant: string = `typography-web--${props.variant}`;

  const fontStyles: string = `${style.typography} ${
    style[`typography-color--${props.color}`]
  } ${style[deviceFontVariant]} ${style[`typography-align--${props.align}`]}
`;

  return (
    <>
      {props.paragraph ? (
        <div className={fontStyles}>{`${children}`}</div>
      ) : (
        <span className={fontStyles}>{`${children}`}</span>
      )}
    </>
  );
};

Typography.defaultProps = {
  device: "mobile",
  color: "primary-00",
  align: "left",
  variant: "body-1-bold",
  paragraph: false,
};
export default Typography;
