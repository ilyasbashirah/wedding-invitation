import style from "./style.module.scss";
import Typography from "@/src/components/Typography";

export type ButtonBaseProps = {
  text: string;
};

export default function ButtonBase({
  children,
  variant = "primary",
  enabled = true,
  size = "wide",
  type = "button",
  capitalize = false,
  text = "",
  onClick,
}: {
  children?: JSX.Element;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "secondary" | "tertiary";
  capitalize?: boolean;
  size?: "wide" | "modal" | "half" | "action" | "primary";
  enabled?: boolean;
  onClick?: () => void;
}): JSX.Element {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      id="button"
      data-testid="button"
      type={type}
      onClick={enabled ? () => handleClick() : (e) => e.preventDefault()}
      className={`${style.button} ${
        style[`button--${variant}-${enabled ? "enabled" : "disabled"}`]
      } ${style[`button--${size}`]} `}
    >
      {children}
      <Typography
        variant={"heading-1-regular"}
        align="center"
        color={variant === "primary" ? "white" : "cooper"}
      >
        {capitalize ? text?.toUpperCase() : text}
      </Typography>
    </button>
  );
}
