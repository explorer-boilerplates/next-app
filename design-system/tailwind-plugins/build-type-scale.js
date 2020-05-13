// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, theme }) => {
  const fontSize = theme("fontSize", {});
  const fontWeight = theme("fontWeight", {});
  const letterSpacing = theme("letterSpacing", {});
  const newUtilities = {
    ".heading-1": {
      fontSize: `${fontSize["heading-1"]}`,
      fontWeight: `${fontWeight["heading-1"]}`,
      letterSpacing: `${letterSpacing["heading-1"]}`,
    },
    ".heading-2": {
      fontSize: `${fontSize["heading-2"]}`,
      fontWeight: `${fontWeight["heading-2"]}`,
      letterSpacing: `${letterSpacing["heading-2"]}`,
    },
    ".heading-3": {
      fontSize: `${fontSize["heading-3"]}`,
      fontWeight: `${fontWeight["heading-2"]}`,
      letterSpacing: `${letterSpacing["heading-3"]}`,
    },
    ".heading-4": {
      fontSize: `${fontSize["heading-4"]}`,
      fontWeight: `${fontWeight["heading-4"]}`,
      letterSpacing: `${letterSpacing["heading-4"]}`,
    },
    ".heading-5": {
      fontSize: `${fontSize["heading-5"]}`,
      fontWeight: `${fontWeight["heading-5"]}`,
      letterSpacing: `${letterSpacing["heading-5"]}`,
    },
    ".heading-6": {
      fontSize: `${fontSize["heading-6"]}`,
      fontWeight: `${fontWeight["heading-6"]}`,
      letterSpacing: `${letterSpacing["heading-6"]}`,
    },
    ".subtitle-1": {
      fontSize: `${fontSize["subtitle-1"]}`,
      fontWeight: `${fontWeight["subtitle-1"]}`,
      letterSpacing: `${letterSpacing["subtitle-1"]}`,
    },
    ".subtitle-2": {
      fontSize: `${fontSize["subtitle-2"]}`,
      fontWeight: `${fontWeight["subtitle-2"]}`,
      letterSpacing: `${letterSpacing["subtitle-2"]}`,
    },
    ".body-1": {
      fontSize: `${fontSize["body-1"]}`,
      fontWeight: `${fontWeight["body-1"]}`,
      letterSpacing: `${letterSpacing["body-1"]}`,
    },
    ".body-2": {
      fontSize: `${fontSize["body-2"]}`,
      fontWeight: `${fontWeight["body-2"]}`,
      letterSpacing: `${letterSpacing["body-2"]}`,
    },
    ".button": {
      fontSize: `${fontSize.button}`,
      fontWeight: `${fontWeight.button}`,
      letterSpacing: `${letterSpacing.button}`,
      textTransform: "uppercase",
    },
    ".caption": {
      fontSize: `${fontSize.caption}`,
      fontWeight: `${fontWeight.caption}`,
      letterSpacing: `${letterSpacing.caption}`,
    },
    ".overline": {
      fontSize: `${fontSize.overline}`,
      fontWeight: `${fontWeight.overline}`,
      letterSpacing: `${letterSpacing.overline}`,
      textTransform: "uppercase",
    },
  };

  addUtilities(newUtilities);
});
