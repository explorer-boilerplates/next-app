import React, { ReactNode } from "react";
import { Button, ButtonProps } from "./button";

export default {
  title: "Components|Button",
  component: Button,
};

export const Text = (args: ButtonProps): ReactNode => <Button {...args} />;

Text.story = { args: { label: "Hello Button" } };
