import { Meta, StoryObj } from "@storybook/react";

import Dang from "./Dang";

const meta: Meta<typeof Dang> = {
  title: "Component/Dang",
  component: Dang,
};

export default meta;

export const Primary: StoryObj<typeof Dang> = {
  args: {
    text: "Dang",
  },
};