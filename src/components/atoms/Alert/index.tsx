import classNames from "classnames";
import { XIcon } from "coengageicons-react/solid";
import React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The type of the alert
   */
  type?: "success" | "danger" | "warning" | "info" | "neutral";
  /**
   * If defined, shows the close icon that calls this function
   */
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  const { className, children, type = "info", onClose, ...other } = props;
  const alert = {
    base: "p-4 relative leading-5",
    withClose: "pr-12",
    success: "bg-success-shade text-success-type",
    danger: "bg-alert-shade text-error-type",
    warning: "bg-yellow-shade text-warning-type",
    neutral: "bg-gray-8 text-color-regular",
    info: "bg-purple-3 text-primary-color-dark",
    icon: {
      base: "h-5 w-5",
      success: "text-success-type",
      danger: "text-error-type",
      warning: "text-warning-type",
      neutral: "text-color-regular",
      info: "text-primary-color-dark",
    },
  };

  const baseStyle = alert.base;
  const withCloseStyle = alert.withClose;
  const typeStyle = alert[type];
  const iconBaseStyle = alert.icon.base;
  const iconTypeStyle = alert.icon[type];

  const cls = classNames(
    baseStyle,
    typeStyle,
    onClose && withCloseStyle,
    className
  );

  const closeCls = classNames(iconBaseStyle, iconTypeStyle);

  return (
    <div className={cls} role="alert" ref={ref} {...other}>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4"
          aria-label="close"
        >
          <XIcon className={closeCls} />
        </button>
      )}
      {children}
    </div>
  );
});

export default Alert;
