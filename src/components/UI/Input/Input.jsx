import "@UI/Input/Input.scss";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import iconEmail from "@img/icon-email.svg";
import iconPassword from "@img/icon-password.svg";
import iconSearch from "@img/icon-search.svg";
import iconDropdown from "@img/icon-dropdown.svg";

export const Input = ({
  placeholder,
  option,
  label,
  type,
  disabled,
  value,
  onClick,
  onBlur,
  ...props
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
            placeholder={placeholder || "Type your e-mail"}
            value={value}
            autoComplete="on"
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
            {...props}
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
            placeholder={placeholder || "Type your password"}
            value={value}
            autoComplete="on"
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
            {...props}
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
            placeholder={placeholder || "Type claim title"}
            value={value}
            autoComplete="on"
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
            {...props}
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
            placeholder={placeholder || "Search"}
            value={value}
            autoComplete="on"
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
            {...props}
          />
          <img src={iconSearch}></img>
        </>
      );
      break;

    case "dropdown":
      input = (
        <>
          {disabled ? (
            <>
              <div className={"type " + option.slug}></div>
              <select
                className={"input__field dropdown dropdown--active"}
                value={value}
                disabled={disabled}
                readOnly
                {...props}
              >
                <option value={option.slug} disabled>
                  {option.name}
                </option>
              </select>
            </>
          ) : (
            <>
              <div className={"type " + value}></div>
              <select
                className={
                  value
                    ? "input__field dropdown dropdown--active"
                    : "input__field dropdown"
                }
                value={value}
                disabled={disabled}
                onClick={() => setVector(!isVector)}
                onBlur={() => {
                  setVector(false);
                  onBlur();
                }}
                readOnly
                {...props}
              >
                <option value={value.slug} disabled>
                  Select type
                </option>
                {option.map((item) => (
                  <option value={item.slug} key={nanoid()}>
                    {item.name}
                  </option>
                ))}
              </select>
            </>
          )}

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

