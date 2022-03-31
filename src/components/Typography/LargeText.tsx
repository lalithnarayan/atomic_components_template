import { Text as BaseText } from "../atoms";
import type { TextProps } from "../atoms";
import React from "react";

export interface LargeTextProps
  extends Omit<TextProps, "size" | "as" | "boldness" | "block" | "clickable"> {
  /**
   * This Props renders an Extra Large text
   * @default false
   */
  xl?: boolean;
  /**
   * This specifies the fontweight to be rendered
   * @default regular
   */
  fontWeight?: "regular" | "medium" | "bold";
}

const fontWeights: any = {
  regular: "regular",
  medium: "medium",
  bold: "bold",
};

export function LargeText(props: LargeTextProps) {
  const { children, xl = false, fontWeight = "regular", ...other } = props;
  return (
    <BaseText
      {...other}
      boldness={fontWeights[fontWeight]}
      size={xl ? "xl" : "lg"}
      as="h4"
    >
      {children}
    </BaseText>
  );
}

LargeText.displayName = "LargeText";

export default LargeText;
