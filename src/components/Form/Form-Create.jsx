import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@components/Form/Form.scss";
import Input from "@UI/Input/Input";
import Button from "@UI/Button/Button";
import useInput from "@components/Form/FormValidation.jsx";
import { useSelector } from "react-redux";
const FormCreate = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const API = useSelector((state) => state.user.API);
  const [isSuccess, setSuccess] = useState(false);

  const title = useInput("", {
    minLength: 5,
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

  const cancelButtom = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  const createClaim = async (e) => {
    e.preventDefault();
    if (!title.isValid || !description.isValid || !dropdown.isValid) {
      setSuccess(false);
      setMessage("Please enter correct data");
    } else {
      await API()
        .post("/claim", {
          title: title.value,
          description: description.value,
          type: dropdown.value,
          status: "new",
        })
        .then(() => {
          setSuccess(true);
          setMessage("Success");
        })
        .catch((err) => {
          setSuccess(false);
          setMessage(String(err.response.data.message));
        });
    }
  };
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
          onChange={dropdown.onChange}
          option={[
            {
                "name": "Hardware",
                "slug": "hard"
            },
            {
                "name": "Software",
                "slug": "soft"
            },
            {
                "name": "Networking",
                "slug": "net"
            },
            {
                "name": "Troubleshooting",
                "slug": "troublesh"
            }
        ]}
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
        <Button type="cancel" onClick={cancelButtom} />
        <Button type="submit" onClick={createClaim} />
      </div>
      <span className={isSuccess ? "form__success" : "form__error"}>
        {message}
      </span>
    </form>
  );
};

export default FormCreate;
