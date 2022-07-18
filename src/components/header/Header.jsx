import React, {useState} from "react";
import { Link } from "react-router-dom";
import "@components/Header/Header.scss";
import Input from "@UI/Input/Input";
import iconBell from "@img/icon-notification.svg";
import picAvatar from "@img/avatar.jpg";
import iconExit from "@img/icon-exit.svg";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "@store/userSlice";
import { toggleNavbar } from "@store/homeSlice";
import {getClaims} from "@store/action.homeSlice";

const Header = ({ isSearch = true }) => {
  const dispatch = useDispatch();
  const [searchValue, setSerchValue] = useState('');

  const searchHandler = (e) =>  {
    setSerchValue(e.target.value);
    dispatch(getClaims(searchValue));
  }	

  const nickName = useSelector((state) => state.user.fullName);
  console.log(nickName);
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div
            className="header__burger"
            onClick={() => dispatch(toggleNavbar())}
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
              <div
                className="header__exit"
                onClick={() => dispatch(
                  setToken({
                    token: "",
                    fullName: "",
                  })
                )}
              >
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
