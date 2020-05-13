import { NextPage } from "next";
import { Basic, Combined, Animated, bounce } from "@styles/styles";
import { css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import HelloWorld from "../components/hello";

const Home: NextPage = () => (
  <main>
    <h1
      css={css`
        ${tw`heading-1`}
      `}
    >
      This is the heading
    </h1>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let&apos;s bounce.</Animated>
    <HelloWorld />
  </main>
);

export default Home;
