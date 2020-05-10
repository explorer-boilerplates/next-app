import { NextComponentType } from "next";
import { css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";

type HelloWorldProps = {};

const HelloWorld: NextComponentType<HelloWorldProps> = () => {
  return (
    <div
      css={css`
        ${tw`w-10 h-10 text-black bg-gray-200`}
      `}
    >
      Hello
    </div>
  );
};

export default HelloWorld;
