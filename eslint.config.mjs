// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import baseConfigs from "eslint-config-webpack";
import webpackConfigs from "eslint-config-webpack/configs.js";

const eslintConfig = defineConfig([
  // Base recommended rules include TypeScript, React, Node, and stylistic recommendations.
  ...baseConfigs,

  // Add Webpack-specific guardrails (webpack 5 mode via eslint-config-webpack plugin scope):
  webpackConfigs["webpack/special"],

  // Override default ignores from other shared configs if needed.
  globalIgnores([
    "out/**",
    "build/**",
  ]),

  // Storybook flat config rules.
  ...storybook.configs["flat/recommended"],
]);

export default eslintConfig;
