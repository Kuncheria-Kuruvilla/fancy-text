import { Meta, StoryObj } from "@storybook/react";

import FancyText from "./FancyText";

const meta: Meta<typeof FancyText> = {
  title: "Component/FancyText",
  component: FancyText,
  parameters: {
    backgrounds: {
      default: "Dark Blue",
      values: [
        { name: "Dark Blue", value: "#011627" },
        { name: "facebook", value: "#3b5998" },
      ],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof FancyText> = {
  args: {
    text: "This is Fancy :)",
  },
};
