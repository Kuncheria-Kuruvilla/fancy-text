import { Meta, StoryObj } from "@storybook/react";

import Dang from "./Dang";

const meta: Meta<typeof Dang> = {
  title: "Component/Dang",
  component: Dang,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "Default",
      values: [
        { name: "Default", value: "#4d5eb3" },
        { name: "Dark", value: "#242424" },
      ],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Dang> = {
  args: {
    text: "dang!",
    textColor: "white",
    backgroundColor: "#4d5eb3",
  },
};