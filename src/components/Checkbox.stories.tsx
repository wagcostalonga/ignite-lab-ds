import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from './Text';

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    children: "Button Text",
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Label</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>; // "Meta" já trás toda intelisense

// "StoryObj" também ajuda a trazer toda intelisense
export const Default: StoryObj<CheckboxProps> = {};

