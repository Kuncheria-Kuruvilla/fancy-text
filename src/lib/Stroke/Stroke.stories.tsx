import { Meta, StoryObj } from "@storybook/react";

import Stroke from "./Stroke";

const meta: Meta<typeof Stroke> = {
  title: "Component/Stroke",
  component: Stroke,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "Default",
      values: [{ name: "Default", value: "#000119" }],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Stroke> = {
  args: {
    text: "Stroke",
    backgroundColor: "#000119",
  },
};
