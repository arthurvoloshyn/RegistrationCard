import * as React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using next.js" />

      <link rel="icon" href="/static/icons/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/icons/logo192.png" />

      <link rel="manifest" href="/manifest.json" />

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      />

      <title>Registration Card</title>
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
