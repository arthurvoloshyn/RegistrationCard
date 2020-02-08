import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  };

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
