import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

import { ContextType } from '../interfaces/Context';
import { ErrorPagePropsInterface, ErrorPageType } from '../interfaces/ErrorPage';

import { ErrorProvider } from '../context';

import Error from '../Error';

const ErrorPage: NextPage<ErrorPagePropsInterface> = ({ statusCode }) => (
  <ErrorProvider value={statusCode}>
    <Error />
  </ErrorProvider>
);

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorPageType => {
  const statusCode: ContextType = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default ErrorPage;
