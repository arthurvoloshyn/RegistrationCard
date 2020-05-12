import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

import { ErrorPagePropsInterface } from '../interfaces/ErrorPage';

import { ErrorProvider } from '../context';

import Error from '../Error';

const ErrorPage: NextPage<ErrorPagePropsInterface> = ({ statusCode }) => (
  <ErrorProvider value={statusCode}>
    <Error />
  </ErrorProvider>
);

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode: number = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default ErrorPage;
