import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@pages/Login/Login.scss";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import Checkbox from "@components/Checkbox/Checkbox";
import poster from "@img/poster-home-copy.png";
import logoCompany from "@img/logo-company.svg";

const Login = () => {
  const [stateOverlay, setStateOverlay] = useState("");
  const [stateSignIn, setstateSignIn] = useState("");
  const [stateSignUp, setstateSignUp] = useState("login__block--disabled");

  const changeOverlay = (ref) => {
    if (stateOverlay === "") {
      setStateOverlay("login__overlay--active");
      setstateSignIn("login__block--disabled");
      setstateSignUp("");
    } else {
      setStateOverlay("");
      setstateSignIn("");
      setstateSignUp("login__block--disabled");
    }
  };

  return (
    <main className="login">
      <div className="login__container">
        <figure className={"login__overlay " + stateOverlay}>
          <img src={poster} alt="login poster"></img>
        </figure>
        <section className={"login__block sign-up " + stateSignUp}>
          <img src={logoCompany} alt="logo company"></img>
          <form className="login__form">
            <Input
              type="textfield"
              label="full name"
              placeholder="Type your full name"
            />
            <Input type="email" label="e-email" />
            <Input type="password" label="password" />
            <Button type="submit" value="Login" />
            <p className="login__link">
              Have an account?
              <a href="#" onClick={() => changeOverlay("sign-in")}>
                {" "}
                Request authorization
              </a>
            </p>
          </form>
        </section>
        <section className={"login__block sign-in " + stateSignIn}>
          <img src={logoCompany} alt="logo company"></img>
          <form className="login__form" action="#">
            <Input type="email" label="e-email" />
            <Input type="password" label="password" />
            <Checkbox></Checkbox>
            <Link to="/">
              <Button type="submit" value="Login" />
            </Link>
            <p className="login__link">
              Not a member?
              <a href="#" onClick={() => changeOverlay("sign-up")}>
                {" "}
                Request registration
              </a>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
