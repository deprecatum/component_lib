import path from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-webpack5';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-webpack5",
};
export default config;