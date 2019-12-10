import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";

class Password extends Component {
  state = {
    show: false,
  };

  handleClick = () => {
    let { show } = this.state;
    let changeShow = (show === true) ? (show = false) : (show = true);

    this.setState({
      show: changeShow,
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
