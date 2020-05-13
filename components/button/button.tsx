import React, { FC } from "react";
import { SerializedStyles, css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";

export type ButtonProps = {
  /**
   * Button label
   */
  readonly label: string;

  /**
   * Simple click handler
   */
  readonly onClick?: () => void;
  /**
   * Styles
   */
  css?: SerializedStyles;
};

/**
 * The world's most _basic_ button
 */
export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  ...props
}: ButtonProps) => {
  // eslint-disable-next-line no-console
  console.log("Error");

  return (
    <button
      onClick={onClick}
      type="button"
      css={css`
        ${tw`text-indigo-300`}
      `}
      {...props}
    >
      {label}
    </button>
  );
};
