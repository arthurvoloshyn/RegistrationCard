import React, { Component } from 'react';
import Alert from 'react-s-alert';

import { FormStateInterface } from '../../../interfaces/Form';

import Registration from '../../components/Registration';
import SignIn from '../../components/SignIn';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

class Form extends Component<{}, FormStateInterface> {
  state = {
    active: 'registration',
  };

  handleClick = (): void => {
    this.setState(({ active }) => ({
      active: active === 'registration' ? 'signIn' : 'registration',
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    Alert.success('Success', {
      position: 'top-right',
      effect: 'scale',
      beep: false,
      timeout: 2000,
    });
  };

  render(): React.ReactElement {
    const { active } = this.state;

    return (
      <div className="wrap">
        {active === 'registration' ? (
          <Registration onClick={this.handleClick} onSubmit={this.handleSubmit} />
        ) : (
          <SignIn onClick={this.handleClick} onSubmit={this.handleSubmit} />
        )}

        <Alert stack={{ limit: 3 }} />
      </div>
    );
  }
}

export default Form;
