import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>; // "Meta" já trás toda intelisense

// "StoryObj" também ajuda a trazer toda intelisense
export const Default: StoryObj<TextProps> = {};

export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    size: "xs",
  },
};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with p tag</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
