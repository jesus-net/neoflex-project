import React, { useState, useEffect } from "react";

import "@UI/Input/Input.scss";

import iconEmail from "@img/icon-email.svg";
import iconPassword from "@img/icon-password.svg";
import iconSearch from "@img/icon-search.svg";
import iconDropdown from "@img/icon-dropdown.svg";
import { nanoid } from "nanoid";

const Input = ({
  type,
  label,
  maxLength,
  placeholder,
  value,
  option,
  onChange,
  onBlur,
  disabled,
}) => {
  let input;
  const [isVector, setVector] = useState(false);
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
            autoComplete="on"
            disabled={disabled}
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
            autoComplete="on"
            disabled={disabled}
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
            value={value}
            maxLength={maxLength}
            placeholder={placeholder || "Type claim title"}
            autoComplete="on"
            disabled={disabled}
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
            onChange={(e) => onChange(e)}
            placeholder={placeholder || "Search"}
            autoComplete="on"
          />
          <img src={iconSearch}></img>
        </>
      );
      break;

    case "dropdown":
      input = (
        <>
          {disabled ? 
          <div className={"type " + value.slug}></div> : 
          <div className={"type " + value}></div>}
          <select
            className={
              value
                ? "input__field dropdown dropdown--active"
                : "input__field dropdown"
            }
            value={disabled ? value.slug : value}
            onChange={(e) => onChange(e)}
            onClick={() => setVector(!isVector)}
            disabled={disabled}
            onBlur={(e) => {
              setVector(false);
              onBlur(e);
            }}
          >
            {disabled ? (
              <option value={value.slug} disabled>
                {value.name}
              </option>
            ) : (
              <>
                <option value="" disabled>
                  Select type
                </option>
                {option.map((item) => (
                  <option value={item.slug} key={nanoid()}>
                    {item.name}
                  </option>
                ))}
              </>
            )}
          </select>
          <img
            className={
              isVector
                ? "dropdown__vector dropdown__vector--active"
                : "dropdown__vector"
            }
            src={iconDropdown}
          ></img>
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
