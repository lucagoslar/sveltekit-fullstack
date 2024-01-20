module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['svelte', '@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [{
    files: ["*.svelte"],
    parser: "svelte-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
    },
  }],
};