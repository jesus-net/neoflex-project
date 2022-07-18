import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "@Form/Form.scss";
import logoCompany from "@img/logo-company.svg";
import Button from "@UI/Button/Button";
import Input from "@UI/Input/Input";
import Checkbox from "@UI/Checkbox/Checkbox";
import useInput from "@Form/FormValidation.jsx";
import { setUser, setToken } from "@store/userSlice";

const FormAuth = ({ handleClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const API = useSelector((state) => state.user.API);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [messageForm, setMessageForm] = useState("");

  const email = useInput("", {
    isEmail: true,
    isEmpty: "e-mail",
  });
  const password = useInput("", {
    minLength: 6,
    maxLength: 40,
    isEmpty: "password",
  });

  function authUser() {
    if (!email.isValid || !password.isValid) {
      dispatch(setUser(false));
      setMessageForm("Please enter correct data");
    } else {
      API().post("auth/login", {
        email: email.value,
        password: password.value,
      })
        .then((obj) => {
          dispatch(setUser(true));
          dispatch(setToken({token: obj.data.token, fullName:obj.data.fullName}));
          setMessageForm("");
          if (location.state?.from) {
            navigate(location.state.from);
          } else navigate("/home");
        })
        .catch((err) => {
          dispatch(setUser("incorrect"));
          setMessageForm(String(err.response.data.message));
        });
    }
  }
  return (
    <form className="form form-auth">
      <img src={logoCompany} alt="logo company"></img>
      <div className="form-auth__content">
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
        <Checkbox name="save_authorization" value=""></Checkbox>
        <div
          className={
            loggedIn === "incorrect" ? "form__button--warning" : "form__button"
          }
        >
          <Button type="submit" value="Login" onClick={authUser} />
        </div>
        <p className="form-auth__link">
          Not a member?{" "}
          <a href="#" onClick={() => handleClick()}>
            Request registration.
          </a>
        </p>
        {(loggedIn === "incorrect" || !loggedIn) && (
          <span className="form__error">{messageForm}</span>
        )}
      </div>
    </form>
  );
};

export default FormAuth;
