import React, { useState } from "react";

import "@UI/Input/Input.scss";

import iconEmail from "@img/icon-email.svg";
import iconPassword from "@img/icon-password.svg";
import iconSearch from "@img/icon-search.svg";
import iconDropdown from "@img/icon-dropdown.svg";

const Input = ({
  type,
  label,
  maxLength,
  placeholder,
  value,
  onChange,
  onBlur,
  onSelect
}) => {
  let input;
  const typeDropdown = [
    "Hardware",
    "Software",
    "Troubleshooting",
    "Networking",
  ];
  
  const [isActiveDropdown, setActiveDropdown] = useState(false);

  switch (type) {
    case "email":
      input = (
        <>
          <input
            className="input__field"
            type="email"
            value={value}
            name={type}
            maxLength={maxLength}
            placeholder={placeholder || "Type your e-mail"}
            onChange={(e) => onChange(e)}
            onBlur={(e) => onBlur(e)}
          />
          <img src={iconEmail}></img>
        </>
      );
      break;
    case "password":
      input = (
        <div className="">
          <input
            className="input__field"
            type="password"
            value={value}
            name={type}
            maxLength={maxLength}
            placeholder={placeholder || "Type your password"}
            onChange={(e) => onChange(e)}
            onBlur={(e) => onBlur(e)}
          />
          <img src={iconPassword}></img>
        </div>
      );
      break;
    case "textfield":
      input = (
        <>
          <input
            className="input__field"
            type="text"
            name={label}
            maxLength={maxLength}
            placeholder={placeholder || "Type claim title"}
            onChange={(e) => onChange(e)}
            onBlur={(e) => onBlur(e)}
          />
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
            maxLength={30}
            placeholder={placeholder || "Search"}
          />
          <img src={iconSearch}></img>
        </>
      );
      break;

    case "dropdown":
      input = (
        <>
          {value && <div className={"type " + value}></div>}
          <input
            className={
              "input__field" + (value ? " input__field--active" : "")
            }
            placeholder={placeholder || "Select type"}
            value={value}
            onClick={() => setActiveDropdown(!isActiveDropdown)}
            onBlur={(e) => onBlur(e)}
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
                onClick={() => onSelect(item)}
              >
                {item}
              </span>
            ))}
          </div>
        </>
      );
      break;
  }
  return (
    <div className={"input " + type}>
      {label && <label className="label">{label}</label>}
      {input}
    </div>
  );
};

export default Input;
