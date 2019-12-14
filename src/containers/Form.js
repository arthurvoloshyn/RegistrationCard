import React, { Component } from "react";
import Alert from "react-s-alert";
import { configAlert, stackAlert } from "../utils";
import Registration from "../components/Registration";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/scale.css";

import SignIn from "../components/SignIn";

class Form extends Component {
  state = {
    active: "registration",
  };

  handleClick = () => {
    const { active } = this.state;
    const newActive = active === "registration" ? "signIn" : "registration";

    this.setState({
      active: newActive,
    })
  };

  handleSubmit = e => {
    e.preventDefault();

    Alert.success("Success", configAlert);
  };

  render() {
    const { active } = this.state;

    return (
      <div className="wrap">
        {(active === "registration") ? (
          <Registration
            onClick={this.handleClick}
            onSubmit={this.handleSubmit}
          />
        ) : (
          <SignIn
            onClick={this.handleClick}
            onSubmit={this.handleSubmit}
          />
        )}

        <Alert stack={stackAlert} />
      </div>
    );
  }
}

export default Form;
