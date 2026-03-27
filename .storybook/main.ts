import path from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-webpack5';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc"
  ],
  "framework": "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@': path.resolve(__dirname, '../src'),
      };
      config.resolve.extensions = [
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.json',
      ];
    }
    return config;
  },
};
export default config;