import { Text as BaseText } from "../atoms";
import type { TextProps } from "../atoms";
import React from "react";

export type SubTitleProps = Omit<
  TextProps,
  "size" | "as" | "boldness" | "clickable"
>;

export function Subtitle(props: SubTitleProps) {
  const { children, ...other } = props;
  return (
    <BaseText {...other} as={"h4"} boldness="medium" size={"2xl"}>
      {children}
    </BaseText>
  );
}

Subtitle.displayName = "Subtitle";
export default Subtitle;
