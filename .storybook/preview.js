import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { addDecorator, addParameters } from "@storybook/react";

// eslint-disable-next-line import/no-extraneous-dependencies
import "@storybook/addon-console";
import globalStyles from "../styles/global-styles";

// When you have problem with displaying tabs inside storybook interface:
//  https://github.com/storybookjs/storybook/issues/8383#issuecomment-541562349 - localStorage.clear() and reload the page

const customViewports = {
  viewports: {
    iphone5: {
      name: "Iphone Smallest",
      styles: {
        width: "320px",
        height: "568px",
      },
      type: "mobile",
    },
    iphone6: {
      name: "Iphone Medium",
      styles: {
        width: "375px",
        height: "667px",
      },
      type: "mobile",
    },
    iphonePlus: {
      name: "Iphone Large",
      styles: {
        width: "414px",
        height: "736px",
      },
      type: "mobile",
    },
    androidS: {
      name: "Android Small",
      styles: {
        width: "360px",
        height: "740px",
      },
      type: "mobile",
    },
    androidM: {
      name: "Android Medium",
      styles: {
        width: "412px",
        height: "732px",
      },
      type: "mobile",
    },
    androidL: {
      name: "Android Large",
      styles: {
        width: "480px",
        height: "853px",
      },
      type: "mobile",
    },
    tabletS: {
      name: "iPad Small",
      styles: {
        width: "768px",
        height: "1024px",
      },
      type: "tablet",
    },
    tabletM: {
      name: "Galaxy Tab 10",
      styles: {
        width: "800px",
        height: "1280px",
      },
      type: "tablet",
    },
    tabletL: {
      name: "iPad Large",
      styles: {
        width: "1024px",
        height: "1366px",
      },
      type: "tablet",
    },
    tabletXL: {
      name: "Chromebook Pixel",
      styles: {
        width: "1280px",
        height: "850x",
      },
      type: "tablet",
    },

    sm: {
      name: "Small breakpoint",
      styles: {
        width: "640px",
        height: "700px",
      },
    },
    md: {
      name: "Medium breakpoint",
      styles: {
        width: "768px",
        height: "700px",
      },
    },
    lg: {
      name: "Large breakpoint",
      styles: {
        width: "1024px",
        height: "1000px",
      },
    },
    xl: {
      name: "Extra Large breakpoint",
      styles: {
        width: "1280px",
        height: "1000px",
      },
    },
  },
};

// Global configurations for addons and default values
addParameters({
  viewport: customViewports,
  actions: { argTypesRegex: "^on.*" },
});

addDecorator((storyFn) => (
  <>
    {globalStyles}
    {storyFn()}
  </>
));

// options: {
//     storySort: (a, b) =>
//       a[1].kind === b[1].kind
//         ? 0
//         : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
//   },
//   actions: { argTypesRegex: "^on.*" },
