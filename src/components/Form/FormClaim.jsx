import React, { useState } from "react";

import "@Form/Form.scss";

import Input from "@UI/Input/Input";
import Button from "@UI/Button/Button";
import useInput from "@Form/FormValidation.jsx";


const FormClaim = () => {
  const title = useInput("", {
    minLength: 10,
    maxLength: 30,
    isEmpty: "title",
  });
  const description = useInput("", {
    minLength: 10,
    maxLength: 50,
    isEmpty: "description",
  });
  const dropdown = useInput("", {
    isEmpty: "dropdown",
  });
  return (
    <form className="form form-claim" action="">
      <div className="form__input">
        <Input
          type="textfield"
          label="title"
          maxLength={title.maxLength}
          value={title.value}
          onBlur={title.onBlur}
          onChange={title.onChange}
        />
        {title.isDirty &&
          (title.isEmpty || title.minLengthErr || title.maxLengthErr) && (
            <span
              className={
                title.maxLengthErr ? "form__error--warning" : "form__error"
              }
            >
              {title.textErr}
            </span>
          )}
      </div>
      <div className="form__input">
        <Input
          type="dropdown"
          label="type"
          value={dropdown.value}
          onBlur={dropdown.onBlur}
          onSelect={dropdown.onSelect}
        />
        {dropdown.isDirty && dropdown.isEmpty && (
          <span className="form__error">{dropdown.textErr}</span>
        )}
      </div>
      <div className="form__input">
        <Input
          type="textfield"
          label="description"
          maxLength={description.maxLength}
          value={description.value}
          onBlur={description.onBlur}
          onChange={description.onChange}
        />
        {description.isDirty &&
          (description.isEmpty ||
            description.minLengthErr ||
            description.maxLengthErr) && (
            <span
              className={
                description.maxLengthErr
                  ? "form__error--warning"
                  : "form__error"
              }
            >
              {description.textErr}
            </span>
          )}
      </div>
      <div className="form-claim__buttons">
        <Button type="cancel" />
        <Button type="submit" />
      </div>
    </form>
  );
};

export default FormClaim;
