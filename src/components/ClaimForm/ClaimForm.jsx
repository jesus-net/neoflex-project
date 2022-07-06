import React from "react";

import "@components/ClaimForm/ClaimForm.scss";

import Input from "@UI/Input/Input";
import Button from "@UI/Button/Button";

const ClaimForm = () => {
    return (
        <form className="claim-form" action="">
        <Input type="textfield" label="title"/>
        <Input type="dropdown" label="type"/>
        <Input type="textfield" label="description" placeholder="Type claim description"/>
        <div className="claim-form__buttons">
        <Button type="cancel"/>
        <Button type="submit"/>
        </div>
        </form>
    )
}

export default ClaimForm;