import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { BasicHeader } from './BasicHeader';
import styles from './basicHeader.module.css';

const meta = {
  title: 'Example/BasicHeader',
  component: BasicHeader,
  parameters: {},
  args: {},
} satisfies Meta<typeof BasicHeader>;
export default meta;

type Story = StoryObj<typeof meta>;
export const ExampleBasicHeader: Story = {};
