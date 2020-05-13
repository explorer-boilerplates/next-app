import { css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import { ReactNode } from "react";

export const H1 = (): ReactNode => (
  <h1
    css={css`
      ${tw`font-sans heading-1`}
    `}
  >
    Headline 1
  </h1>
);

export const H2 = (): ReactNode => (
  <h2
    css={css`
      ${tw`font-sans heading-2`}
    `}
  >
    Headline 2
  </h2>
);
export const H3 = (): ReactNode => (
  <h3
    css={css`
      ${tw`font-sans heading-3`}
    `}
  >
    Headline 3
  </h3>
);
export const H4 = (): ReactNode => (
  <h4
    css={css`
      ${tw`font-sans heading-4`}
    `}
  >
    Headline 4
  </h4>
);
export const H5 = (): ReactNode => (
  <h5
    css={css`
      ${tw`font-sans heading-5`}
    `}
  >
    Headline 5
  </h5>
);
export const H6 = (): ReactNode => (
  <h6
    css={css`
      ${tw`font-sans heading-6`}
    `}
  >
    Headline 6
  </h6>
);

export const Subtitle1 = (): ReactNode => (
  <h3
    css={css`
      ${tw`font-sans subtitle-1`}
    `}
  >
    Subtitle 1
  </h3>
);
export const Subtitle2 = (): ReactNode => (
  <h3
    css={css`
      ${tw`font-sans subtitle-2`}
    `}
  >
    Subtitle 2
  </h3>
);

export const Body1 = (): ReactNode => (
  <>
    <p
      css={css`
        ${tw`font-sans body-1`}
      `}
    >
      Body 1
    </p>
    <p
      css={css`
        ${tw`font-sans leading-normal body-1`}
      `}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
      exercitationem inventore fugiat vitae delectus excepturi. Similique
      commodi ipsum itaque voluptas esse, tenetur tempora voluptates autem ea
      quibusdam iure nihil, quasi voluptatem. Aliquid enim facilis quia labore,
      quisquam vitae! Ex, illo ratione harum nam est beatae esse modi reiciendis
      non incidunt?
    </p>
    <p
      css={css`
        ${tw`font-sans leading-normal body-1`}
      `}
    >
      It&apos;s worthy to note that ratios used in Material Design are not
      fixed. Actually it looks like the combination of several scales. But every
      scale fit perfectly in one of the popular category.
    </p>
  </>
);
export const Body2 = (): ReactNode => (
  <>
    <p
      css={css`
        ${tw`font-sans body-2`}
      `}
    >
      Body 2
    </p>
    <p
      css={css`
        ${tw`font-sans leading-relaxed body-2`}
      `}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
      exercitationem inventore fugiat vitae delectus excepturi. Similique
      commodi ipsum itaque voluptas esse, tenetur tempora voluptates autem ea
      quibusdam iure nihil, quasi voluptatem. Aliquid enim facilis quia labore,
      quisquam vitae! Ex, illo ratione harum nam est beatae esse modi reiciendis
      non incidunt?
    </p>
  </>
);

export const Button = (): ReactNode => (
  <p
    css={css`
      ${tw`font-sans button`}
    `}
  >
    Button
  </p>
);

export const Caption = (): ReactNode => (
  <p
    css={css`
      ${tw`font-sans caption`}
    `}
  >
    Caption
  </p>
);
export const Overline = (): ReactNode => (
  <p
    css={css`
      ${tw`font-sans overline`}
    `}
  >
    overline
  </p>
);
