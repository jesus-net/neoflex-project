import React, { useState } from "react";

import "@pages/Auth/Auth.scss";

import poster from "@img/poster-home.png";
import FormAuth from "@Form/FormAuth";
import FormReg from "@Form/FormReg";

const Auth = () => {
  const [stateForm, setStateForm] = useState({
    overlay: "",
    auth: "",
    reg: "auth__block--disabled",
  });

  const handleOverlay = () => {
    stateForm.overlay === ""
      ? setStateForm({
          overlay: "auth__overlay--active",
          auth: "auth__block--disabled",
          reg: "",
        })
      : setStateForm({
          overlay: "",
          auth: "",
          reg: "auth__block--disabled",
        });
  };

  return (
    <main className="auth">
      <div className="auth__container">
        <figure className={"auth__overlay " + stateForm.overlay}>
          <img src={poster} alt="auth poster"></img>
        </figure>
        <section className={"auth__block " + stateForm.reg}>
          <FormReg handleClick={handleOverlay} />
        </section>
        <section className={"auth__block " + stateForm.auth}>
          <FormAuth handleClick={handleOverlay} />
        </section>
      </div>
    </main>
  );
};

export default Auth;
