import { createContext } from 'react';

import { ContextType } from '../interfaces/Context';

const defaultStatusCode: ContextType = 404;

const { Provider: ErrorProvider, Consumer: ErrorConsumer } = createContext<ContextType>(
  defaultStatusCode,
);

export { ErrorProvider, ErrorConsumer };
