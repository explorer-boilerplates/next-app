module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "promise",
    "cypress",
    "unicorn",
    "emotion",
    "ramda",
    "prettier",
  ],
  extends: [
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:ramda/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  rules: {
    // Additional block is considered marker for docblock-style comment
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    // Duplicate rule with @typescript-eslint
    "no-unused-vars": "off",
    // Spreading is good
    "react/jsx-props-no-spreading": "off",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "emotion/syntax-preference": [2, "string"],
    // js extensions are preffered
    "react/jsx-filename-extension": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/react-in-jsx-scope": "off",
    "unicorn/prevent-abbreviations": "off",
  },
  overrides: [
    {
      files: ["**/*.tsx", "**/*.ts"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
        "prettier/react",
        "prettier/@typescript-eslint",
      ],
      rules: {
        "prettier/prettier": "error",
        "react/prop-types": "off",
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
      },
    },
  ],
  env: {
    "cypress/globals": true,
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
