import React, { Component } from 'react';
import Alert from 'react-s-alert';

import { FormPropsInterface, FormStateInterface } from '../../../interfaces/Form';

import Registration from '../../components/Registration';
import SignIn from '../../components/SignIn';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

class Form extends Component<FormPropsInterface, FormStateInterface> {
  readonly state = {
    active: 'registration',
  };

  public handleClick = (): void => {
    this.setState(({ active }) => ({
      active: active === 'registration' ? 'signIn' : 'registration',
    }));
  };

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    Alert.success('Success', {
      position: 'top-right',
      effect: 'scale',
      beep: false,
      timeout: 2000,
    });
  };

  public render(): React.ReactElement<FormPropsInterface> {
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
