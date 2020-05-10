import React from "react";
import NextApp from "next/app";

import { globalStyles } from "../shared/styles";

export default class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <>
        {globalStyles}
        <Component {...pageProps} />
      </>
    );
  }
}
