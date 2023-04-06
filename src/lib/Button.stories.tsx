import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/TestButton',
  component: Button,
};
export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    disabled: false,
    children: 'Hello',
  },
};