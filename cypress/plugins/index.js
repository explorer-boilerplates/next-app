/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const path = require("path");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (on, config) => {
  // eslint-disable-next-line global-require
  require("cypress-react-unit-test/plugins/react-scripts")(on, config);
  // eslint-disable-next-line global-require
  require("@cypress/code-coverage/task")(on, config);

  const webpack = {
    mode: "development",
    resolve: {
      extensions: [".ts", ".js", ".jsx", ".tsx", ".json"],
      alias: {
        "@components": path.resolve(__dirname, "../../components"),
      },
    },
    node: {
      // Import export errors solution: https://github.com/azu/rc-config-loader/issues/2
      fs: "empty",
      module: "empty",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$|\.tsx?$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "next/babel",
                  "@babel/preset-env",
                  "@emotion/babel-preset-css-prop",
                  "@babel/preset-typescript",
                ],
                plugins: ["macros", "transform-class-properties", "istanbul"],
              },
            },
          ],
        },
      ],
    },
  };

  const options = {
    webpackOptions: webpack,
  };

  on("file:preprocessor", webpackPreprocessor(options));

  return config;
};
