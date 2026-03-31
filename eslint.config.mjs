import js from "@eslint/js";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginStorybook from "eslint-plugin-storybook";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["src/stories/assets/**/*" ]),
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { js, pluginReact, tsPlugin, pluginStorybook },
    languageOptions: {
      parser: tsParser,
      globals: globals.node
    },
    settings: { react: { version: "detect" } },
  },
  { files: ["src/**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["src/**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
