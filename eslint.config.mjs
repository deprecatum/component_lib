// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import configs from "eslint-config-webpack";

const eslintConfig = defineConfig([
  ...configs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    // ".next/**",
    // "next-env.d.ts",
    "out/**",
    "build/**",
  ]),
  ...storybook.configs["flat/recommended"]
]);

export default eslintConfig;
