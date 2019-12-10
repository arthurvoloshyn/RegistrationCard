import React from "react";
import { SignInImgSrc } from "../utils";
import Logo from "./Logo";
import Password from "../containers/Password";

const SignIn = ({ onClick, onSubmit }) => (
  <div className="card signin">
    <Logo />

    <div className="card__side right black">
      <h2 className="glitch" data-text="Welcome">Welcome</h2>

      <img src={SignInImgSrc} alt="Web" />

      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" required />

        <Password />

        <button type="submit">Sign In</button>
      </form>

      <p>No account yet? <span className="link" onClick={onClick}> Registration</span></p>
    </div>
  </div>
);

export default SignIn;
