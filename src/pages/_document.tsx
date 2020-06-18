import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
} from 'next/document';

class MyDocument extends Document<DocumentProps> {
  public static getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  };

  public render(): React.ReactElement<DocumentProps> {
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
