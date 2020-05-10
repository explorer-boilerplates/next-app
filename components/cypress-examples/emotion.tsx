import React from "react";
import { SerializedStyles, css } from "@emotion/core";

type EmotionProps = {
  css?: SerializedStyles;
};

export const Emotion: React.FC<EmotionProps> = () => {
  return (
    <div
      css={{
        color: "hotpink",
      }}
    >
      Emotion{" "}
      <span role="img" aria-label="Devil Face">
        😈
      </span>
    </div>
  );
};

export const Emotion2: React.FC<EmotionProps> = () => {
  return (
    <div
      css={css`
        padding: 22px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        color: blue;
      `}
    >
      Blue on pink.
    </div>
  );
};
