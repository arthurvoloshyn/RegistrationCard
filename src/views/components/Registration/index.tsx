import * as React from 'react';

import { AuthorizationPropsInterface } from '../../../interfaces/Authorization';

import Password from '../../containers/Password';

import Logo from '../Logo';

import logo from '../../../img/logo.png';

const Registration: React.FC<AuthorizationPropsInterface> = ({ onClick, onSubmit }) => (
  <div className="card registration">
    <Logo />

    <div className="card__side right">
      <h2 className="glitch" data-text="Welcome">
        Welcome
      </h2>

      <img src={logo} alt="Web" />

      <form onSubmit={onSubmit}>
        <input placeholder="Name" type="text" required />

        <input placeholder="Email" type="email" required />

        <Password />

        <button type="submit">Registration</button>
      </form>

      <p>
        Already a member{' '}
        <span className="link" onClick={onClick}>
          Sign in
        </span>
      </p>
    </div>
  </div>
);

Registration.defaultProps = {
  onClick: () => {},
  onSubmit: () => {},
};

export default Registration;
