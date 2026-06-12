import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { BlueTheme } from '../../Theme/BlueTheme';
import { BasicHeader } from './Header';
import themeStyles from '../../Theme/themes/blue/theme_light.module.css';
import styles from './header.module.css';

const mockButtons = [
  {
    label: "button1"
  },
  {
    label: "button2"
  },
  {
    label: "button3"
  }
]

const meta = {
  title: 'Example/BasicHeader',
  component: BasicHeader,
} satisfies Meta<typeof BasicHeader>;
export default meta;

type Story = StoryObj<typeof meta>;
  
export const ExampleBasicHeader: Story = {
  parameters: {},
  args: {
    headerClassNames: styles.header,
    buttonClassNames: styles.headerButton,
    buttonsProperties: mockButtons,
  },  
  decorators: [
    (Story) => <BlueTheme className={themeStyles.blueLight} ><Story /></BlueTheme>
  ],
};
