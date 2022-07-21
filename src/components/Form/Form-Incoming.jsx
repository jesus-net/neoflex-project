import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import "@components/Form/Form.scss";
import { useSelector,useDispatch } from "react-redux";
import Input from "@UI/Input/Input";
import Button from "@UI/Button/Button";
import { getClaim } from "@action/action.claimSlice";
const FormIncoming = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const API = useSelector((state) => state.user.API);
  const claim = useSelector((state) => state.claim.claim);
  const type = useSelector((state) => state.claim.type);
  const [message, setMessage] = useState("");
  useEffect(() => {
    dispatch(getClaim(id));
  }, []);
  
  const updateStatus = async (e) => {
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
    await API().put(`claim/${id}`, { ...claim, status: slug }).then(response => console.log(response));
  };
  

  return (
    <form className="form form-claim">
      <div className="form__input">
        <Input
          type="textfield"
          label="title"
          value={claim.title}
          disabled={true}
        />
      </div>
      <div className="form__input">
        <Input
          type="dropdown"
          label="type"
          value={{name: type.name, slug: type.slug}}
          disabled={true}
        />
      </div>
      <div className="form__input">
        <Input
          type="textfield"
          label="description"
          value={claim.description}
          disabled={true}
        />
      </div>
      <div className="form-claim__buttons">
        <Button type="cancel" name="cancel" onClick={updateStatus}/>
        <Button type="submit" name="done" value="Done" onClick={updateStatus} />
        <Button type="declined" name="declined" onClick={updateStatus} />
      </div>
      <span className="form__success">{message}</span>
    </form>
  );
};

export default FormIncoming;



