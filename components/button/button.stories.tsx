import React, { ReactNode } from "react";
import { css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import { Button, ButtonProps } from "./button";

export default {
  title: "Components|Button",
  component: Button,
};

export const Text = (args: ButtonProps): ReactNode => (
  <Button
    {...args}
    css={css`
      ${tw`text-teal-300`}
    `}
  />
);
Text.story = { args: { label: "Hello Button" } };
