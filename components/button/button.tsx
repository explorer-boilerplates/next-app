import React, { FC } from "react";

export type ButtonProps = {
  /**
   * Button label
   */
  readonly label: string;

  /**
   * Simple click handler
   */
  readonly onClick?: () => void;
};

/**
 * The world's most _basic_ button
 */
export const Button: FC<ButtonProps> = ({ label, onClick }: ButtonProps) => {
  // eslint-disable-next-line no-console
  console.log("Error");

  return (
    <button onClick={onClick} type="button">
      {label}
    </button>
  );
};
