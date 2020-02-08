import React from 'react';

import Form from './views/containers/Form';
import Header from './views/components/Header';

import './styles/main.scss';

const App: React.FC = () => (
  <>
    <Header />
    <Form />
  </>
);

export default App;
