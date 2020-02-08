import * as React from 'react';

import PageNotFound from './views/components/PageNotFound';
import Header from './views/components/Header';

import './styles/main.scss';

const Error: React.FC = () => (
  <>
    <Header />
    <PageNotFound />
  </>
);

export default Error;
