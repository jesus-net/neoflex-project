import React, { useEffect, useState } from "react";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = (e) => {
    setDirty(true);
  };
  const onSelect = (item) => {
    setValue(item);
  };
  return {
    value,
    onChange,
    onBlur,
    isDirty,
    onSelect,
    ...valid,
  };
};

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthErr, setMinLengthErr] = useState(false);
  const [maxLengthErr, setMaxLengthErr] = useState(false);
  const [textErr, setTextErr] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [fullNameErr, setFullNameErr] = useState(false);
  const [isValid, setValid] = useState(false);
  const maxLength = validations.maxLength;

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          if (value) setEmpty(false);
          else {
            setEmpty(true);
            setTextErr(`Wrong ${validations[validation]}`);
          }
          break;
        case "minLength":
          if (value.length < validations[validation]) {
            setMinLengthErr(true);
            setTextErr(
              `Must be more than ${validations[validation]} characters`
            );
          } else setMinLengthErr(false);
          break;
        case "maxLength":
          if (value.length >= validations[validation]) {
            setMaxLengthErr(true);
            setTextErr(`Must not exceed ${validations[validation]} characters`);
          } else setMaxLengthErr(false);
          break;
        case "isEmail":
          const reEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

          if (reEmail.test(String(value))) setEmailErr(false);
          else {
            setEmailErr(true);
            setTextErr("Sample post username@gmail.com");
          }
          break;
        case "isFullName":
          const reFullName = /^[a-z ,.'-]+$/i;
          if (value[0] !== String(value[0]).toUpperCase()) {
            setFullNameErr(true);
            setTextErr("Full name must be capitalized");
          } else if (reFullName.test(String(value))) setFullNameErr(false);
          else {
            setFullNameErr(true);
            setTextErr("Full name must be latin characters");
          }
          break;
      }
    }
  }, [value]);

  useEffect(
    () =>
      isEmpty || minLengthErr || maxLengthErr || emailErr || fullNameErr
        ? setValid(false)
        : setValid(true),
    [isEmpty, minLengthErr, maxLengthErr, emailErr, fullNameErr]
  );
  return {
    isEmpty,
    minLengthErr,
    maxLengthErr,
    textErr,
    emailErr,
    fullNameErr,
    isValid,
    maxLength,
  };
};

export default useInput;
