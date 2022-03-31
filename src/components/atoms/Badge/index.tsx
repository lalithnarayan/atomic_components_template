import classNames from "classnames";
import React from "react";
import { forwardRef } from "react";
import styles from "./styles";
/** Badge is used to label, categorize, or organize items using keywords that describe them. */

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The type of the badge
   */
  type?: "success" | "danger" | "warning" | "neutral" | "info";
  /**
   * Specifies if the badge needs to circular to show nos for example
   */
  rounded?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  props,
  ref
) {
  const { className, rounded, children, type = "info", ...other } = props;
  const baseStyle = styles.base;
  const typeStyle = {
    success: styles.success,
    danger: styles.danger,
    warning: styles.warning,
    neutral: styles.neutral,
    info: styles.info,
  };
  const roundedStyles = rounded ? "rounded-full" : "";

  const cls = classNames(baseStyle, typeStyle[type], className, roundedStyles);

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  );
});

export default Badge;
