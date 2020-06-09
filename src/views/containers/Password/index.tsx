import React, { Component } from 'react';

import { PasswordPropsInterface, PasswordStateInterface } from '../../../interfaces/Password';

class Password extends Component<PasswordPropsInterface, PasswordStateInterface> {
  state = {
    show: false,
  };

  handleClick = (): void => {
    this.setState(({ show }) => ({
      show: !show,
    }));
  };

  render(): React.ReactElement {
    const { show } = this.state;

    return (
      <div className="password">
        <input placeholder="Password" type={show ? 'text' : 'password'} required />
        <div className="password-icon" onClick={this.handleClick}>
          <i className={`fa fa-fw ${show ? 'fa-eye-slash' : 'fa-eye'}`} />
        </div>
      </div>
    );
  }
}

export default Password;
