import React, { useState } from "react"; 
import {Link} from "react-router-dom";
import "@components/Header/Header.scss";
import Input from "@components/Input/Input";
import iconBell from "@img/icon-notification.svg";
import picAvatar from "@img/avatar.jpg";
import iconExit from "@img/icon-exit.svg";


const Header = ({onClickMenu}) => (
  <header className="header">
    <div className="header__container">
      <nav className="header__nav">
        <div className="header__burger" onClick = {onClickMenu}>
          <span></span>
        </div>
        <div className="header__search">
          <Input type="search" />
        </div>
        <div className="header__overlay">
          <a
            href="#"
            className="header__notification header__notification--active"
          >
            <img src={iconBell} alt="bell" />
          </a>
          <div className="header__avatar">
            <img src={picAvatar} alt="avatar" />
          </div>
          <p className="header__nickname">Ivan Ivanov</p>
          <Link to='/login'>
          <div className="header__exit">
            <img src={iconExit} alt="exit" />
          </div>
          </Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
