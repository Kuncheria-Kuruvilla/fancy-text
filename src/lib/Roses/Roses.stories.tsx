import { Meta, StoryObj } from "@storybook/react";
import Roses from "./Roses";

const meta: Meta<typeof Roses> = {
  title: "Component/Roses",
  component: Roses,
  parameters: {
    backgrounds: {
      default: "Default",
      values: [
        { name: "Default", value: "#d52e3f" },
        { name: "Dark", value: "#242424" },
      ],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Roses> = {
  args: {
    text: "Roses",
    size: "md",
  },
};
