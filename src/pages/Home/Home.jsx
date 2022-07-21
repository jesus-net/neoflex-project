import React from "react";
import { useNavigate } from "react-router-dom";
import "@pages/Home/Home.scss";
import Button from "@UI/Button/Button";
import ClaimList from "@components/Claim-list/Claim-list";
import PaginationList from "@components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "@slice/homeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.user.role);
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
    </main>
  );
};

export default Home;
