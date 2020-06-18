import * as React from 'react';
import Link from 'next/link';

import { ContextType } from '../../../interfaces/Context';

import { ErrorConsumer } from '../../../context';

const PageNotFound: React.FC = (): React.ReactElement => (
  <div className="error">
    <div className="error__bg" />

    <div className="error__text">
      <h1>Oops, Something went wrong.</h1>
      <ErrorConsumer>{(statusCode: ContextType) => <p>Error {statusCode}!</p>}</ErrorConsumer>
      <p>
        Try{' '}
        <Link href="/">
          <a>going back</a>
        </Link>
        .
      </p>
    </div>
  </div>
);

export default PageNotFound;
