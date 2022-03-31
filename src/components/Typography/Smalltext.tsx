import { Text as BaseText } from "../atoms";
import type { TextProps } from "../atoms";
import React from "react";

export type SmalltextProps = Omit<TextProps, "size" | "as" | "clickable">;

export function Smalltext(props: SmalltextProps) {
  const { children, ...other } = props;
  return (
    <BaseText size={"xs"} {...other}>
      {children}
    </BaseText>
  );
}

Smalltext.displayName = "Smalltext";
export default Smalltext;
