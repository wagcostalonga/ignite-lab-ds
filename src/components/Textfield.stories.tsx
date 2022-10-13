import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { Textfield, TextfieldRootProps } from "./Textfield";

export default {
  title: "Components/Textfield",
  component: Textfield.Root,
  args: {
    children: [
      <Textfield.Icon>
        <Envelope />
      </Textfield.Icon>,
      <Textfield.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextfieldRootProps>; // "Meta" já trás toda intelisense

// "StoryObj" também ajuda a trazer toda intelisense
export const Default: StoryObj<TextfieldRootProps> = {};

export const NoIcon: StoryObj<TextfieldRootProps> = {
  args: {
    children: (
      <Textfield.Input placeholder="Type your e-mail address" />
    )
  }
};

