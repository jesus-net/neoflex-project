import React from "react";
import "@pages/Home/Home.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@UI/Button/Button";
import { ClaimList } from "@components/ClaimList/ClaimList";
import { PaginationList } from "@components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "@slice/homeSlice";
import logoCompany from "@img/logo-company-mini.svg";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.user.role);
  const overlay = useSelector((state) => state.home.overlay);
  const handleHome = () => dispatch(toggleNavbar(false));
  const navigatePosts = () => navigate("/post");

  return (
    <main className="home" onClick={handleHome}>
      <div className="home__container">
        <h1 className="title">Your claims</h1>
        {role === "admin" ? (
          <></>
        ) : (
          <div className="home__button">
            <Button type="plus" value="Create claim" onClick={navigatePosts} />
          </div>
        )}
        <ClaimList />
        <PaginationList />
      </div>
      <div className={overlay ? "overlay overlay--active" : "overlay"}>
        <img src={logoCompany}></img>
        <span className="overlay__message">
          This feature is only available to the administrator :)
        </span>
      </div>
    </main>
  );
};
