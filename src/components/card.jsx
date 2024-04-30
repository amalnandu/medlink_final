import React from "react";
import "../styles/components.css";
const Card = ({ children, style,className }) => {

  const _className=`card ${className}`
  return (
    <div className={_className} style={style}>
      {children}
    </div>
  );
};

export default Card;
