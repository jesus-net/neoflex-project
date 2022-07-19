import React, { useState } from "react";
import "@components/Header/Header.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClearLocalStorage } from "@slice/userSlice";
import { toggleNavbar} from "@slice/homeSlice";
import { getClaims } from "@action/action.homeSlice";
import Input from "@UI/Input/Input";
import iconBell from "@img/icon-notification.svg";
import picAvatar from "@img/avatar.jpg";
import iconExit from "@img/icon-exit.svg";

const Header = ({ isSearch = true }) => {
  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.user.fullName);
  const navbar = useSelector((state) => state.home.navbar);
  const logout = () =>
    dispatch(ClearLocalStorage({ token: "", fullName: "", role: "" }));
  const handleBurger = () => dispatch(toggleNavbar(true));
  const currentPage = useSelector((state) => state.home.currentPage);
  const perPage = useSelector((state) => state.home.perPage);
  const searchHandler = (e) => {
    dispatch(
      getClaims({
        current: currentPage,
        limit: perPage,
        search: e.currentTarget.value,
      })
    );
  };

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div
            className={
              navbar
                ? "header__burger header__burger--disabled"
                : "header__burger"
            }
            onClick={handleBurger}
          >
            <span></span>
          </div>
          <div className="header__search">
            {isSearch && <Input type="search" onChange={searchHandler} />}
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
            <p className="header__nickname">{nickName}</p>
            <Link to="/">
              <div className="header__exit" onClick={logout}>
                <img src={iconExit} alt="exit" />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
