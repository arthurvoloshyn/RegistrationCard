import * as React from 'react';

import Form from './views/containers/Form';
import Header from './views/components/Header';

import './styles/main.scss';

const App: React.FC = (): React.ReactElement => (
  <>
    <Header />
    <Form />
  </>
);

export default App;
