import type { Meta, StoryObj } from '@storybook/nextjs';

import { BasicHeader } from './BasicHeader';

const meta = {
  title: 'Example/BasicHeader',
  component: BasicHeader,
  parameters: {},
  args: {},
} satisfies Meta<typeof BasicHeader>;
export default meta;

type Story = StoryObj<typeof meta>;
export const ExampleBasicHeader: Story = {};
