import classnames from "classnames";
import React from "react";

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  invalid?: boolean;
}

export const FormItem: React.FC<FormItemProps> = ({
  className,
  children,
  invalid,
  // ...other
}) => {
  const classNames = classnames(
    "ce--form-item",
    {
      "ce--form-item--invalid": invalid,
    },
    className
  );

  return <div className={classNames}>{children}</div>;
};

export default FormItem;
