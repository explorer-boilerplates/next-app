import * as React from "react";
import NextApp from "next/app";
import { CacheProvider } from "@emotion/core";

// Use only { cache } from 'emotion'. Don't use { css }.
// eslint-disable-next-line emotion/no-vanilla
import { cache } from "emotion";

import { globalStyles } from "../shared/styles";

export default class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}
