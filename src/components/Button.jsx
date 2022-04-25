// Packages
import React from "react";
// Styles
import "./Button.css";

const Button = ({ children, onClickEvent }) => {
  return (
    <button className="default-button" onClick={onClickEvent}>
      {children}
    </button>
  );
};

export default Button;
