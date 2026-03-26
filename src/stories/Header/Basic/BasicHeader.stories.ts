import type { Meta, StoryObj } from '@storybook/nextjs';
import { ThemeProvider } from '@/stories/Theme/ThemeProvider';

import { fn } from 'storybook/test';

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
