import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { ThemeProvider } from '../../Theme/ThemeProvider';
import { HeaderButton } from './HeaderButton';

const meta = {
  title: 'Example/HeaderButton',
  component: HeaderButton,
  parameters: {},
  args: {text: "Click Me"},
  decorators: [
    (Story) => React.createElement(
      ThemeProvider,
      null,
      Story()
    ),
  ],
} satisfies Meta<typeof HeaderButton>;
export default meta;

type Story = StoryObj<typeof meta>;
export const ExampleHeaderButton: Story = {};
