import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "framework": "@storybook/react-webpack5",
  "stories": [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces existing CSS rules to support CSS Modules
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    auto: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                  },
                  esModule: false,
                },
              }
            ],
          }
        ]
      }
    }
  ],
  
};
export default config;