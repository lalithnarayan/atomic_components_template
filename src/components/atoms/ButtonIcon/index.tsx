import classNames from "classnames";
import React, { ReactNode } from "react";

// import warn from "../../utils/warning";
import styles from "./styles";

type IconType =
  | string
  | React.FunctionComponent<{ className: string; "aria-hidden": boolean }>
  | React.ComponentClass<{ className: string; "aria-hidden": boolean }>;

export interface Props {
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * The size of the button
   */
  size?: "large" | "regular" | "small";
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconType;

  /**
   * The style of the button
   */
  variant?: "outline" | "primary";
}

export interface ButtonAsButtonProps
  extends Props,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element that should be rendered as a button
   */
  tag?: "button";
  /**
   * The native HTML button type
   */
  type?: "button" | "submit" | "reset";
}

export interface ButtonAsAnchorProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: "a";
}

export interface ButtonAsOtherProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string;
}

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsAnchorProps
  | ButtonAsOtherProps;

type Ref = ReactNode | HTMLElement | string;

const ButtonIcon = React.forwardRef<Ref, ButtonProps>(function ButtonIcon(
  props,
  ref
) {
  const {
    tag = "button",
    // Fix https://github.com/estevanmaito/windmill-react-ui/issues/7
    type = tag === "button" ? "button" : undefined,
    disabled = false,
    size = "regular",
    variant = "primary",
    icon,
    className,
    children,
    ...other
  } = props;

  function hasIcon() {
    return !!icon;
  }

  // warn(
  //   hasIcon() && !other["aria-label"] && !children,
  //   "Button",
  //   'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  // );

  const Icon = icon;

  const baseStyle = styles.base;
  const sizeStyles = {
    large: styles.size.large,
    regular: styles.size.regular,
    small: styles.size.small,
    /**
     * Only used in Pagination.
     * Not meant for general use.
     */
    // pagination: styles.size.pagination
  };
  const iconSizeStyles = {
    large: styles.size.icon.large,
    regular: styles.size.icon.regular,
    small: styles.size.icon.small,
  };
  const iconStyle = styles.icon[size];
  const layoutStyles = {
    //   This is added like this as disabled button style was overlapping
    primary: classNames(styles.primary.base, {
      "bg-primary-color ": !disabled,
    }),
    outline: classNames(styles.outline.base, {
      "text-primary-color border-primary-color ": !disabled,
    }),
  };
  const activeStyles = {
    primary: styles.primary.active,
    outline: styles.outline.active,
  };
  const disabledStyles = {
    primary: styles.primary.disabled,
    outline: styles.outline.disabled,
  };

  const buttonStyles = classNames(
    baseStyle,
    // has icon but no children
    hasIcon() && !children && iconSizeStyles[size],
    // has icon and children
    hasIcon() && children && sizeStyles[size],
    // does not have icon
    !hasIcon() && sizeStyles[size],
    layoutStyles[variant],
    disabled ? disabledStyles[variant] : activeStyles[variant],
    className
  );

  const iconStyles = classNames(iconStyle, children ? styles.icon.left : "");

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick, disabled } = props;
    if (disabled) {
      e.preventDefault();
      return;
    }
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  return React.createElement(
    tag,
    {
      className: buttonStyles,
      ref,
      disabled,
      type,
      onClick: { handleClick },
      ...other,
    },
    Icon
      ? React.createElement(Icon, {
          className: iconStyles,
          "aria-hidden": true,
        })
      : null,
    children
  );
});

export default ButtonIcon;
