import * as React from 'react';

import { AuthorizationPropsInterface } from '../../../interfaces/Authorization';

import Password from '../../containers/Password';

import Logo from '../Logo';

import logoWhite from '../../../img/logo-white.png';

const SignIn: React.FC<AuthorizationPropsInterface> = ({
  onClick,
  onSubmit,
}): React.ReactElement => (
  <div className="card signin">
    <Logo />

    <div className="card__side right black">
      <h2 className="glitch" data-text="Welcome">
        Welcome
      </h2>

      <img src={logoWhite} alt="Web" />

      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" required />

        <Password />

        <button type="submit">Sign In</button>
      </form>

      <p>
        No account yet?{' '}
        <span className="link" onClick={onClick}>
          {' '}
          Registration
        </span>
      </p>
    </div>
  </div>
);

SignIn.defaultProps = {
  onClick: () => {},
  onSubmit: () => {},
};

export default SignIn;
