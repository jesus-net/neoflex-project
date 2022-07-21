import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "@components/Form/Form.scss";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "@UI/Input/Input";
import { Button } from "@UI/Button/Button";
import { getClaim } from "@action/action.postSlice";

export const FormIncoming = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const API = useSelector((state) => state.user.API);
  const claim = useSelector((state) => state.post.claim);
  const type = useSelector((state) => state.post.type);
  const [message, setMessage] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  useEffect(() => {
    dispatch(getClaim(id));
  }, []);

  const updateStatus = async (e) => {
    e.preventDefault();
    let slug;
    const type = e.target.name;
    switch (type) {
      case "done":
        slug = "done";
        break;
      case "cancel":
        slug = "in-progress";
        break;
      case "declined":
        slug = "decl";
        break;
    }
    await API()
      .put(`claim/${id}`, { ...claim, status: slug })
      .then(() => {
        setSuccess(true);
        setMessage("Success");
      });
    if (type === "cancel") return navigate(-1);
  };
  return (
    <form className="form form-claim">
      <div className="form__input">
        <Input
          type="textfield"
          label="title"
          placeholder={claim.title}
          disabled={true}
        />
      </div>
      <div className="form__input">
        <Input
          type="dropdown"
          label="type"
          value={type.slug || "empty"}
          disabled={true}
          option={{ name: type.name, slug: type.slug }}
        />
      </div>
      <div className="form__input">
        <Input
          type="textfield"
          label="description"
          placeholder={claim.description}
          disabled={true}
        />
      </div>
      <div className="form-claim__buttons big">
        <Button type="cancel" name="cancel" onClick={updateStatus} />
        <Button type="submit" name="done" value="Done" onClick={updateStatus} />
        <Button type="declined" name="declined" onClick={updateStatus} />
      </div>
      {isSuccess && <span className="form__success">{message}</span>}
    </form>
  );
};
