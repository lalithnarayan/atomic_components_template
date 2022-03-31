import ClassNames from "classnames";
import React from "react";

export const TEXT_COLORS = {
  DARKER: "text-heading-color",
  DARK: "text-color-regular",
  LIGHT: "text-type-color-light",
  DANGER: "text-error-text-color",
  SUCCESS: "text-success-color",
  WARNING: "null",
  PRIMARY: "text-primary-color",
  WHITE: "text-white",
};

export const TEXT_SIZES = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  h1: "text-h1",
  h2: "text-h2",
};

export const TEXT_BOLDNESS = {
  light: "font-light",
  medium: "font-medium",
  normal: "font-regular",
  semibold: "font-semibold",
  bold: "font-bold",
};
export interface TextProps {
  /**
   * This indicates the children of the text node
   */
  children: React.ReactNode;
  /**
   * This indicates the classNames to be added to the text component
   */
  className?: string;
  /**
   * Greys out the text
   */
  muted?: boolean;
  /**
   * This indicates if the text is clickable
   */
  clickable?: boolean;
  /**
   * This indicates the text is a strikethrough
   */
  strike_through?: boolean;
  /**
   * This allows long words to be able to be broken and wrap onto the next line
   */
  wrap?: boolean;
  /**
   * This capitalizes the text
   */
  capitalize?: boolean;
  /**
   * this property specifies how white-space inside an element is handled
   */
  nowrap?: boolean;
  /**
   * Truncates long strings with an ellipsis
   */
  // elipsis?: boolean;
  /**
   * This indiacates if the element should be a block element
   */
  block?: boolean;
  /**
   * This indicates Font weight
   */
  boldness?: "light" | "medium" | "semibold" | "bold";
  /**
   * This indicates the Color
   * @default sm
   */
  color?: typeof TEXT_COLORS[keyof typeof TEXT_COLORS];
  /**
   * This indicates where the text is aligned
   *
   */
  align?: "left" | "right" | "center" | "justify";
  /**
   * This indicates the size of the text
   * @default sm
   */
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

  as?: React.ElementType;
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<HTMLElement>
>;

const InternalText: React.ForwardRefRenderFunction<unknown, TextProps> = (
  props: TextProps,
  ref
) => {
  const {
    align = "left",
    block = false,
    boldness = "normal",
    clickable,
    children,
    className,
    capitalize,
    nowrap,
    strike_through = false,
    size = "sm",
    wrap,
    as: Component = "span",
    muted,
    color,
    ...element_attributes
  } = props;

  const classes = ClassNames("cursor-inherit", {
    [`${TEXT_SIZES[size]}`]: size,
    [`${TEXT_BOLDNESS[boldness]}`]: boldness,
    [`text-${align}`]: align,
    "cursor-pointer": clickable,
    "whitespace-nowrap": nowrap,
    "break-words": wrap,
    [`${color}`]: color,
    capitalize,
    "line-through": strike_through,
    [`${className}`]: className,
    block,
    "text-gray-7": muted,
  });

  return (
    <Component className={classes} {...element_attributes} ref={ref}>
      {children}
    </Component>
  );
};
export const Text = React.forwardRef<unknown, TextProps>(
  InternalText
) as CompoundedComponent;

Text.displayName = "Text";

export default Text;
