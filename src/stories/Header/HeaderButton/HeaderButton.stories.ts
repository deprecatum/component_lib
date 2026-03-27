import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { HeaderButton } from './HeaderButton';

const meta = {
  title: 'Example/HeaderButton',
  component: HeaderButton,
  parameters: {},
  args: {},
  /*decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    )
  ],*/
} satisfies Meta<typeof HeaderButton>;
export default meta;

type Story = StoryObj<typeof meta>;
export const ExampleBasicHeader: Story = {};
