import React, { useState } from "react";

import "@pages/Auth/Auth.scss";

import poster from "@img/poster-home-copy.png";
import FormAuth from "@Form/FormAuth";

import axios from "axios";

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
          <FormAuth type="reg" clickLink={handleOverlay} />
        </section>
        <section className={"auth__block " + stateForm.auth}>
          <FormAuth type="auth" clickLink={handleOverlay} />
        </section>
      </div>
    </main>
  );
};

export default Auth;

/* let DB = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzFlY2U5ZDg1OGE1ZDI0NDYxM2I2NCIsImVtYWlsIjoidXNlcjExMUBtYWlsLnJ1IiwiaWF0IjoxNjU2ODc2MjY1LCJleHAiOjE2NTY5NjI2NjV9.ibt0FDMa-KlZkL_NthxDydBCmsEuqSjtsCRYhJB4htA`}
});

DB.get('/user').then(res => console.log(res.data.users)); */
