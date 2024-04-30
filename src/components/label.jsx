import React from "react";
import "../styles/routes.css";

export const Label = ({
  children,
  placeholderStyle,
  style,
  type,
  placeholder,
  onChange
}) => {
  const _label = `label ${placeholderStyle}`;
  return (
    <input
      type={type}
      style={style}
      placeholder={placeholder}
      className={_label}
      onChange={onChange}
    />
  );
};
