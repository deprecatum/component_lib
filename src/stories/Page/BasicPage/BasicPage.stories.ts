import type { Meta, StoryObj } from '@storybook/nextjs';

import { BasicPage } from './BasicPage';

const meta = {
  title: 'Example/BasicPage',
  component: BasicPage,
  parameters: {

  },
} satisfies Meta<typeof BasicPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ExampleBasicPage: Story = {};
