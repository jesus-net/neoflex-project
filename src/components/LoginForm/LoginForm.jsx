import React from "react";

import "@components/LoginForm/LoginForm.scss";

import logoCompany from "@img/logo-company.svg";

import Button from "@UI/Button/Button";
import Input from "@UI/Input/Input";
import Checkbox from "@UI/Checkbox/Checkbox";

import { Link } from "react-router-dom";

const LoginForm = ({ type, clickLink }) => {
  return (
    <form className="login-form" action="#">
      <img src={logoCompany} alt="logo company"></img>
      <div className="login-form__content">
        {type === "reg" ? (
          <Input
            type="textfield"
            label="full name"
            placeholder="Type your full name"
          />
        ) : null}
        <Input type="email" label="e-email" />
        <Input type="password" label="password" />
        {type === "reg" ? null : <Checkbox></Checkbox>}
        <Link to="/">
          <Button type="submit" value="Login" />
        </Link>
        <p className="login-form__link">
          {type === "reg" ? " Not a member?" : "Have an account?"}
          <a href="#" onClick={() => clickLink()}>
            {" "}
            Request {type === "reg" ? "authorization" : "registration"}
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
