import "@components/Input/Input.scss";
import React, { useState } from "react";
import iconEmail from "@img/icon-email.svg";
import iconPassword from "@img/icon-password.svg";
import iconDropdown from "@img/icon-dropdown.svg";
import iconSearch from "@img/icon-search.svg";

const Input = ({ type, label, placeholder }) => {
  let input;
  const [isActiveVector, setActiveVector] = useState(false);
  switch (type) {
    case "email":
      input = (
        <>
          <input
            className="input__block"
            type="email"
            placeholder={placeholder || "Type your e-mail"}
          />
          <img src={iconEmail}></img>
        </>
      );
      break;
    case "password":
      input = (
        <>
          <input
            className="input__block"
            type="password"
            placeholder={placeholder || "Type your password"}
          />
          <img src={iconPassword}></img>
        </>
      );
      break;
    case "textfield":
      input = (
        <>
          <input
            className="input__block"
            type="text"
            placeholder={placeholder || "Type claim title"}
          />
        </>
      );
      break;
    case "search":
      input = (
        <>
          <input
            className="input__block"
            type="text"
            placeholder={placeholder || "Search"}
          />
          <img src={iconSearch}></img>
        </>
      );
      break;
    case "dropdown":
      input = (
        <div className="dropdown">
          <input
            className="input__block"
            placeholder={placeholder || "Select type"}
          />
          <img
            className={"dropdown__vector" + (isActiveVector ? " dropdown__vector--active" : "")}
            src={iconDropdown}
            onClick={() => setActiveVector(!isActiveVector)}
          ></img>
          <div className={"dropdown__menu" + (isActiveVector ? " dropdown__menu--active" : "")}>
            <span className="dropdown___select hardware">Hardware</span>
            <span className="dropdown___select software">Software</span>
            <span className="dropdown___select troubleshooting">
              Troubleshooting
            </span>
            <span className="dropdown___select networking">Networking</span>
          </div>
        </div>
      );
      break;
  }
  return (
    <div className="input">
      {label ? <label className="label">{label}</label> : null}
      {input}
    </div>
  );
};

export default Input;
