import { Meta, StoryObj } from "@storybook/react";

import CoolText from "./CoolText";

const meta: Meta<typeof CoolText> = {
  title: "Component/CoolText",
  component: CoolText,
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

export const Primary: StoryObj<typeof CoolText> = {
  args: {
    text: "This is cool",
  },
};
