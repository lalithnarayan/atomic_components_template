import { Text as BaseText } from "../atoms";
import type { TextProps } from "../atoms";
import React from "react";

export interface RegularTextProps
  extends Omit<TextProps, "size" | "boldness" | "clickable"> {
  /**
   * This specifies the fontweight to be rendered
   * @default regular
   */
  fontWeight?: "regular" | "semibold";
}

const fontWeights: any = {
  regular: "regular",
  semibold: "semibold",
};

export function RegularText(props: RegularTextProps) {
  const { children, fontWeight = "regular", ...other } = props;
  return (
    <BaseText {...other} boldness={fontWeights[fontWeight]} size={"sm"}>
      {children}
    </BaseText>
  );
}

RegularText.displayName = "RegularText";

export default RegularText;
