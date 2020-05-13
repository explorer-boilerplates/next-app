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
    // Your custom webpack config goes here

    return config;
  },
};
