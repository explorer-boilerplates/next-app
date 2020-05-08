import { NextPage } from "next";
import { css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import { Basic, Combined, Animated, bounce } from "../shared/styles";

const Home: NextPage = () => (
  <div>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let&apos;s bounce.</Animated>
    <div
      css={css`
        ${tw`w-10 h-10 text-teal-600 bg-gray-200`}
      `}
    >
      {" "}
      Hello
    </div>
  </div>
);

export default Home;
