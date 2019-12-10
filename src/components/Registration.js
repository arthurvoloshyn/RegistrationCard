import React from "react";
import { registrationImgSrc } from "../utils";
import Logo from "./Logo";
import Password from "../containers/Password";

const Registration = ({ onClick, onSubmit }) => (
  <div className="card registration">
    <Logo />

    <div className="card__side right">
      <h2 className="glitch" data-text="Welcome">Welcome</h2>

      <img src={registrationImgSrc} alt="Web" />

      <form onSubmit={onSubmit}>
        <input placeholder="Name" type="text" required />

        <input placeholder="Email" type="email" required />

        <Password />

        <button type="submit">Registration</button>
      </form>

      <p>Already a member <span className="link" onClick={onClick}>Sign in</span></p>
    </div>
  </div>
);

export default Registration;
