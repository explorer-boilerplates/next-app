const path = require("path");

module.exports = {
  stories: [
    "../design-system/**/*.stories.(ts|tsx|js|jsx|mdx)",
    "../components/**/*.stories.(ts|tsx|js|jsx|mdx)",
  ],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-viewport",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
  ],

  webpackFinal: async (config) => {
    // Add emotion preset to babel-loader js
    config.module.rules[0].use[0].options.presets.push(
      "@emotion/babel-preset-css-prop"
    );
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    // eslint-disable-next-line no-param-reassign
    config.resolve.mainFields = ["browser", "module", "main"];

    // Create aliases
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      "@components": path.resolve(__dirname, "../src/components"),
    };

    return config;
  },
};
