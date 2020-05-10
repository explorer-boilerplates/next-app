import React from "react";

type ButtonProps = {};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
