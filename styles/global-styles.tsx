import { Global, css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import tailwindReset from "./tailwind-reset";

const globalStyles = (
  <Global
    styles={css`
      ${tailwindReset}
      /* To generate fonts it can be useful to use something like: https://google-webfonts-helper.herokuapp.com/fonts */
      /* roboto-300 - latin */
      @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 300;
        src: local("Roboto Light"), local("Roboto-Light"),
          url("/fonts/roboto-v20-latin-300.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("/fonts/roboto-v20-latin-300.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* roboto-regular - latin */
      @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        src: local("Roboto"), local("Roboto-Regular"),
          url("/fonts/roboto-v20-latin-regular.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("/fonts/roboto-v20-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* roboto-500 - latin */
      @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        src: local("Roboto Medium"), local("Roboto-Medium"),
          url("/fonts/roboto-v20-latin-500.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("/fonts/roboto-v20-latin-500.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }

      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      body {
        ${tw`font-sans leading-normal text-gray-900 bg-gray-100`}
      }
    `}
  />
);

export default globalStyles;
