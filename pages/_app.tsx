import React from "react";
import NextApp from "next/app";

import globalStyles from "../styles/global-styles";

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
