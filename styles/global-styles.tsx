import { Global, css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import tailwindReset from "./tailwind-reset";

const globalStyles = (
  <Global
    styles={css`
      ${tailwindReset}

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
