import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button Text",
  },
  argTypes: {
  },
} as Meta<ButtonProps>; // "Meta" já trás toda intelisense

// "StoryObj" também ajuda a trazer toda intelisense
export const Default: StoryObj<ButtonProps> = {};

