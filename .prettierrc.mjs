/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.js", "*.ts"],
      options: {
        parser: "babel",
      },
    },
    {
      files: ["*.css", "*.scss", "*.less"],
      options: {
        parser: "css",
      },
    },
    {
      files: ["*.json"],
      options: {
        parser: "json",
      },
    },
    {
      files: ["*.md", "*.mdx"],
      options: {
        parser: "markdown",
      },
    },
  ],
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  printWidth: 80,
  trailingComma: "es5",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "ignore",
  embeddedLanguageFormatting: "auto",
  arrowParens: "always",
  endOfLine: "lf",
  proseWrap: "always",
};
