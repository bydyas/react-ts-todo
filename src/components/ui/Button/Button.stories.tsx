import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Save: Story = {
  render: () => <Button label='Save changes' />,
};
