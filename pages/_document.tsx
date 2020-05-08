import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

interface MyDocumentProps {
  css: string;
  ids: string[];
}

export default class MyDocument extends Document<MyDocumentProps> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static getInitialProps({ renderPage }: { renderPage: Function }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render(): JSX.Element {
    return (
      <html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(" ")}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
