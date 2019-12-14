import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { PasswordPropsModel, PasswordStateModel } from "../../../models/Password";
import PasswordController from "../../../controllers/Password";

const { handleClick } = PasswordController;

class Password extends Component<PasswordPropsModel, PasswordStateModel> {
  state = {
    show: false,
  };

  handleClick = () => {
    const { show } = this.state;

    handleClick(show, changeShow => {
      this.setState({
        show: changeShow,
      });
    });
  };

  render() {
    const { show } = this.state;

    return (
      <div className="password">
        {show ? (
          <input placeholder="Password" type="text" required />
        ) : (
          <input placeholder="Password" type="password" required />
        )}
        <div className="password-icon" onClick={this.handleClick}>
          {show ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </div>
      </div>
    );
  }
}

export default Password;
