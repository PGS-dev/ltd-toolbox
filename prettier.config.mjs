/** @type {import("prettier").Config} */
const config = {
  printWidth: 250,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  trailingComma: 'es5',
  singleAttributePerLine: true,
  semi: true,
  plugins: ['prettier-plugin-organize-imports'],
  endOfLine: 'lf'
};

export default config;
