import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginStorybook from "eslint-plugin-storybook";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["src/**/*.{ts,tsx}"], plugins: { js, pluginReact, tseslint }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  { files: ["src/**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["src/**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  { files: ["src/**/*.stories.{ts,tsx}"], plugins: { pluginStorybook } },
]);
