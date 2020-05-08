import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

interface MyDocumentProps {
  css: string;
  ids: string[];
}

export default class MyDocument extends Document<MyDocumentProps> {
  static getInitialProps({ renderPage }: { renderPage: Function }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <html>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(" ")}
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
