import classNames from "classnames";
import React, { ReactNode } from "react";

// import warn from "../../utils/warning";
import styles from "./styles";
import LoadingIcon from "./LoadingIcon";

type IconType =
  | string
  | React.FunctionComponent<{ className: string; "aria-hidden": boolean }>
  | React.ComponentClass<{ className: string; "aria-hidden": boolean }>;

export interface Props {
  /**
   * This is the What is goes inside the button component
   */
  children?: React.ReactNode;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * The size of the button
   * @default regular
   */
  size?: "larger" | "large" | "regular" | "small";
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconType;
  /**
   * Shows an icon inside the button, left aligned
   */
  iconLeft?: IconType;
  /**
   * Shows an icon inside the button, right aligned
   */
  iconRight?: IconType;
  /**
   * The style of the button
   */
  variant?: "outline" | "link" | "primary" | "danger";
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean;
  /**
   * Shows theLoading
   */
  loading?: boolean;
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

const Button = React.forwardRef<Ref, ButtonProps>(function Button(props, ref) {
  const {
    tag = "button",
    // Fix https://github.com/estevanmaito/windmill-react-ui/issues/7
    type = tag === "button" ? "button" : undefined,
    disabled = false,
    loading = false,
    size = "regular",
    variant = "primary",
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    ...other
  } = props;

  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight;
  }

  // warn(
  //   hasIcon() && !other["aria-label"] && !children,
  //   "Button",
  //   'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  // );

  const IconLeft = iconLeft || icon;
  const IconRight = iconRight;

  const baseStyle = styles.base;
  const blockStyle = styles.block;
  const sizeStyles = {
    larger: styles.size.larger,
    large: styles.size.large,
    regular: styles.size.regular,
    small: styles.size.small,
    /**
     * Only used in Pagination.
     * Not meant for general use.
     */
    pagination: styles.size.pagination,
  };
  const iconSizeStyles = {
    larger: styles.size.icon.larger,
    large: styles.size.icon.large,
    regular: styles.size.icon.regular,
    small: styles.size.icon.small,
    pagination: styles.size.icon.regular,
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
    link: classNames(styles.link.base, {
      " text-primary-color ": !disabled,
    }),
    danger: styles.danger.base,
  };
  const activeStyles = {
    primary: styles.primary.active,
    outline: styles.outline.active,
    link: styles.link.active,
    danger: styles.danger.active,
  };
  const disabledStyles = {
    primary: styles.primary.disabled,
    outline: styles.outline.disabled,
    link: styles.link.disabled,
    danger: styles.danger.disabled,
  };

  const loadingStyles: any = {
    primary: styles.primary.loading,
    danger: styles.danger.loading,
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
    loading ? loadingStyles[variant] : null,
    block ? blockStyle : null,
    className
  );

  const iconLeftStyles = classNames(
    iconStyle,
    children ? styles.icon.left : ""
  );
  const iconRightStyles = classNames(
    iconStyle,
    children ? styles.icon.right : ""
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick, disabled } = props;
    if (loading || disabled) {
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
      onClick: handleClick,
      ...other,
    },
    loading
      ? React.createElement(LoadingIcon, {
          className: iconLeftStyles,
          "aria-hidden": true,
        })
      : null,
    IconLeft
      ? React.createElement(IconLeft, {
          className: iconLeftStyles,
          "aria-hidden": true,
        })
      : null,
    children,
    IconRight
      ? React.createElement(IconRight, {
          className: iconRightStyles,
          "aria-hidden": true,
        })
      : null
  );
});

export default Button;
