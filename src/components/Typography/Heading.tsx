import { Text as BaseText, TEXT_COLORS } from "../atoms";
import type { TextProps } from "../atoms";
import React from "react";

export const TITLE_SIZES = ["h1", "h2", "h3"];
export interface TitleProps
  extends Omit<TextProps, "size" | "as" | "boldness" | "block" | "clickable"> {
  /**
   * This indicates the size of the text
   * @default h3
   */
  variant?: "h1" | "h2" | "h3";
}

const TITLE_PROPS: any = {
  h1: {
    size: "h1",
  },
  h2: {
    size: "h2",
  },
  h3: {
    size: "2xl",
  },
};

export function Heading(props: TitleProps) {
  const { children, variant = "h3", ...other } = props;
  return (
    <BaseText
      as={variant}
      boldness="bold"
      color={TEXT_COLORS.DARKER}
      {...other}
      {...TITLE_PROPS[variant]}
    >
      {children}
    </BaseText>
  );
}

Heading.displayName = "Heading";
export default Heading;
