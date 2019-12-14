import React, { Component } from "react";
import Alert from "react-s-alert";
import { FormPropsModel, FormStateModel } from "../../../models/Form";
import UtilsController from "../../../controllers/Utils";
import FormController from "../../../controllers/Form";
import Registration from "../../components/Registration";
import SignIn from "../../components/SignIn";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/scale.css";

const { stackAlert } = UtilsController;
const { handleClick, handleSubmit } = FormController;

class Form extends Component<FormPropsModel, FormStateModel> {
  state = {
    active: "registration",
  };

  handleClick = () => {
    const { active } = this.state;

    handleClick(active, newActive => {
      this.setState({
        active: newActive,
      });
    });
  };

  render() {
    const { active } = this.state;

    return (
      <div className="wrap">
        {(active === "registration") ? (
          <Registration
            onClick={this.handleClick}
            onSubmit={handleSubmit}
          />
        ) : (
          <SignIn
            onClick={this.handleClick}
            onSubmit={handleSubmit}
          />
        )}

        <Alert stack={stackAlert} />
      </div>
    );
  }
}

export default Form;
