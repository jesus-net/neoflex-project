import React, { useState } from "react";

import "@UI/Input/Input.scss";

import iconEmail from "@img/icon-email.svg";
import iconPassword from "@img/icon-password.svg";
import iconSearch from "@img/icon-search.svg";
import iconDropdown from "@img/icon-dropdown.svg";

const Input = ({ type, label, placeholder}) => {
  let input;
  const typeDropdown = [
    "Hardware",
    "Software",
    "Troubleshooting",
    "Networking",
  ];
  const [isActiveDropdown, setActiveDropdown] = useState(false);
  const [valueDropdown, setValueDropdown] = useState(undefined);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [fullNameDirty, setFullNameDirty] = useState(false);

  const [emailErr, setEmailErr] = useState("Wrong email");
  const [passwordErr, setPasswordErr] = useState("Wrong password");
  const [fullNameErr, setFullNameErr] = useState("Wrong full name");

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "full name":
        setFullNameDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (e.target.value.length === 0) {
      setEmailErr("Wrong email");
    } else if (!re.test(String(e.target.value).toLowerCase()))
      setEmailErr("Incorrect email");
    else setEmailErr("");
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length === 0) setPasswordErr("Wrong password");
    else if (e.target.value[0] === e.target.value[0].toLowerCase())
      setPasswordErr("Password must start with a capital letter");
    else if (e.target.value.length < 6)
      setPasswordErr("Password must be more than 6 characters");
    else {
      setPasswordErr("");
    }
  };

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
    const re = /[a-zа-я]/i;
    if (e.target.value.length === 0) setFullNameErr("Wrong full name");
    else if (!re.test(String(e.target.value).toLowerCase()))
      setFullNameErr("Full name must be letters");
    else if (e.target.value.length < 4) {
      setFullNameErr("Full name must be more than 4 characters");
    } else setFullNameErr("");
  };

  switch (type) {
    case "email":
      input = (
        <>
          <input
            className="input__field"
            type={type}
            name={type}
            value={email}
            placeholder={placeholder || "Type your e-mail"}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
          />
          <img src={iconEmail}></img>
          {emailDirty && emailErr && (
            <div className="input__error">{emailErr}</div>
          )}
        </>
      );
      break;
    case "password":
      input = (
        <>
          <input
            className="input__field"
            type="password"
            name={type}
            value={password}
            placeholder={placeholder || "Type your password"}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordHandler(e)}
          />
          <img src={iconPassword}></img>
          {passwordDirty && passwordErr && (
            <div className="input__error">{passwordErr}</div>
          )}
        </>
      );
      break;
    case "textfield":
      input = (
        <>
          <input
            className="input__field"
            type="text"
            name={label}
            value={fullName}
            placeholder={placeholder || "Type claim title"}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => fullNameHandler(e)}
          />
          {fullNameDirty && fullNameErr && (
            <div className="input__error">{fullNameErr}</div>
          )}
        </>
      );
      break;
    case "search":
      input = (
        <>
          <input
            className="input__field"
            type="text"
            name={type}
            placeholder={placeholder || "Search"}
          />
          <img src={iconSearch}></img>
        </>
      );
      break;

    case "dropdown":
      input = (
        <>
          {valueDropdown && <div className={"type " + valueDropdown}></div>}
          <input
            className={
              "input__field" + (valueDropdown ? " input__field--active" : "")
            }
            placeholder={placeholder || valueDropdown || "Select type"}
            onClick={() => setActiveDropdown(!isActiveDropdown)}
            readOnly
          />
          <img
            className={
              "dropdown__vector" +
              (isActiveDropdown ? " dropdown__vector--active" : "")
            }
            src={iconDropdown}
          ></img>
          <div
            className={
              "dropdown__menu" +
              (isActiveDropdown ? " dropdown__menu--active" : "")
            }
          >
            {typeDropdown.map((item) => (
              <span
                className={"dropdown___select " + item}
                onClick={() => setValueDropdown(item)}
              >
                {item}
              </span>
            ))}
          </div>
        </>
      );
  }
  return (
    <div className={"input " + type}>
      {label && <label className="label">{label}</label>}
      {input}
    </div>
  );
};

export default Input;
