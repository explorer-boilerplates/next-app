import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import { css } from "@emotion/core";

type HelloWorld = {};

const HelloWorld: React.FC<HelloWorld> = () => {
  return (
    <div
      css={css`
        ${tw`text-red-700 bg-red-100`}
      `}
    >
      Hello World!
    </div>
  );
};

export default HelloWorld;
