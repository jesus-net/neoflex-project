import React, { useState, useEffect } from "react";

import "@Form/Form.scss";

import logoCompany from "@img/logo-company.svg";

import Button from "@UI/Button/Button";
import Input from "@UI/Input/Input";
import Checkbox from "@UI/Checkbox/Checkbox";
import useInput from "@Form/FormValidation.jsx";

import { Link } from "react-router-dom";


const FormAuth = ({ type, clickLink }) => {
  const fullName = useInput("", {
    minLength: 4,
    maxLength: 40,
    isFullName: true,
    isEmpty: "full name",
  });

  const email = useInput("", {
    isEmail: true, 
    isEmpty: "e-mail" 
  });
  const password = useInput("", {
    minLength: 6,
    maxLength: 40,
    isEmpty: "password",
  });

  const [isWrong, setWrong] = useState(false);

  return (
    <form className="form form-auth" action="#">

      <img src={logoCompany} alt="logo company"></img>
      <div className="form-auth__content">
        {type === "reg" ? (
          <div className="form__input">
            <Input
              type="textfield"
              label="full name"
              placeholder="Type your full name"
              value={fullName.value}
              maxLength={fullName.maxLength}
              onChange={fullName.onChange}
              onBlur={fullName.onBlur}
            />
            {fullName.isDirty &&
              (fullName.isEmpty ||
                fullName.minLengthErr ||
                fullName.maxLengthErr ||
                fullName.fullNameErr) && (
                <span className={fullName.maxLengthErr ? "form__error--warning" : "form__error"}>{fullName.textErr}</span>
              )}
          </div>
        ) : null}
        <div className="form__input">
          <Input
            type="email"
            label="e-email"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
          />
          {email.isDirty &&
            (email.isEmpty || email.emailErr) && (
              <span className="form__error">{email.textErr}</span>
            )}
        </div>
        <div className="form__input">
          <Input
            type="password"
            label="password"
            value={password.value}
            maxLength={password.maxLength}
            onChange={password.onChange}
            onBlur={password.onBlur}
          />
          {password.isDirty &&
            (password.isEmpty ||
              password.minLengthErr ||
              password.maxLengthErr) && (
              <span className={password.maxLengthErr ? "form__error--warning" : "form__error"}>{password.textErr}</span>
            )}
        </div>

        {type === "reg" ? null : <Checkbox name="save_authorization" value=""></Checkbox>}
        {type === "reg" ? (
          <Button type="submit" value="Create Account" />
        ) : (
          <Button
            type="submit"
            value="Login"
            onClick={() => setWrong(!email.isValid || !password.isValid)}
          />
        )}
        <p className="form-auth__link">
          {type === "reg" ? "Have an account? " : "Not a member? "}
          <a href="#" onClick={() => clickLink()}>
            Request {type === "reg" ? "authorization" : "registration"}
          </a>
        </p>
        {isWrong && <span className="form__error">Data not correct</span>}
      </div>
    </form>
  );
};

export default FormAuth;
