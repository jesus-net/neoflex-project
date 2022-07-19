import React, { useState } from "react";
import "@components/Form/Form.scss";
import logoCompany from "@img/logo-company.svg";
import Button from "@UI/Button/Button";
import Input from "@UI/Input/Input";
import useInput from "@components/Form/FormValidation.jsx";

import { useSelector } from "react-redux";

const FormReg = ({ handleClick }) => {

  const API = useSelector((state) => state.user.API);
  const [signIn, setSignIn] = useState(false);
  const [messageForm, setMessageForm] = useState("");

  const fullName = useInput("", {
    minLength: 4,
    maxLength: 40,
    isFullName: true,
    isEmpty: "full name",
  });

  const email = useInput("", {
    isEmail: true,
    isEmpty: "e-mail",
  });
  const password = useInput("", {
    minLength: 6,
    maxLength: 40,
    isEmpty: "password",
  });

  const createUser = () => {
    if (!fullName.isValid || !email.isValid || !password.isValid) {
      setSignIn(false);
      setMessageForm("Please enter correct data");
    } else {
      API().post("auth/registration", {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
      })
        .then(() => {
          setSignIn(true);
          setMessageForm("User successfully registered");
        })
        .catch((err) => {
          setSignIn(null);
          setMessageForm(String(err.response.data.message));
        });
    }
  };
  console.log(signIn);
  return (
    <form className="form form-auth">
      <img src={logoCompany} alt="logo company"></img>
      <div className="form-auth__content">
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
              <span
                className={
                  fullName.maxLengthErr ? "form__error--warning" : "form__error"
                }
              >
                {fullName.textErr}
              </span>
            )}
        </div>
        <div className="form__input">
          <Input
            type="email"
            label="e-email"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
          />
          {email.isDirty && (email.isEmpty || email.emailErr) && (
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
              <span
                className={
                  password.maxLengthErr ? "form__error--warning" : "form__error"
                }
              >
                {password.textErr}
              </span>
            )}
        </div>
        <div
          className={
            signIn === null ? "form__button--warning" : "form__button"
          }
        >
          <Button type="submit" value="Create Account" onClick={createUser} />
        </div>
        <p className="form-auth__link">
          Have an account?{" "}
          <a href="#" onClick={() => handleClick()}>
            authorization
          </a>
        </p>
        {
          <span className={!signIn ? "form__error" : "form__success"}>
            {messageForm}
          </span>
        }
      </div>
    </form>
  );
};

export default FormReg;
