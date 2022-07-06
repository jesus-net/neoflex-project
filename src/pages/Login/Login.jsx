import React, { useState } from "react";

import "@pages/Login/Login.scss";

import poster from "@img/poster-home-copy.png";
import LoginForm from "@components/LoginForm/LoginForm";

import axios from "axios";

const Login = () => {
  const [stateForm, setStateForm] = useState({
    overlay: "",
    auth: "",
    reg: "login__block--disabled",
  });

  const handleOverlay = () => {
    stateForm.overlay === ""
      ? setStateForm({
          overlay: "login__overlay--active",
          auth: "login__block--disabled",
          reg: "",
        })
      : setStateForm({
          overlay: "",
          auth: "",
          reg: "login__block--disabled",
        });
  };

let DB = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzFlY2U5ZDg1OGE1ZDI0NDYxM2I2NCIsImVtYWlsIjoidXNlcjExMUBtYWlsLnJ1IiwiaWF0IjoxNjU2ODc2MjY1LCJleHAiOjE2NTY5NjI2NjV9.ibt0FDMa-KlZkL_NthxDydBCmsEuqSjtsCRYhJB4htA`}
});

DB.get('/user').then(res => console.log(res.data.users));
  return (
    <main className="login">
      <div className="login__container">
        <figure className={"login__overlay " + stateForm.overlay}>
          <img src={poster} alt="login poster"></img>
        </figure>
        <section className={"login__block " + stateForm.reg}>
          <LoginForm type="reg" clickLink={handleOverlay} />
        </section>
        <section className={"login__block " + stateForm.auth}>
          <LoginForm type="auth" clickLink={handleOverlay} />
        </section>
      </div>
    </main>
  );
};

export default Login;

