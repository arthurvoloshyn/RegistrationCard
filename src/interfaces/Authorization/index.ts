import * as React from 'react';

export interface AuthorizationPropsInterface {
  onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
