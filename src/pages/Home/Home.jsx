import React from "react";
import { Link } from "react-router-dom";
import "@pages/Home/Home.scss";
import Button from "@UI/Button/Button";
import ClaimList from "@components/Claim-list/Claim-list";
import Pagination from "@components/Pagination/Pagination";
import {useDispatch} from "react-redux";
import { toggleNavbar } from "@slice/homeSlice";
const Home = () => {
  const dispatch = useDispatch();
  const handleHome = () => dispatch(toggleNavbar(false));
  return (
      <main className="home" onClick={handleHome}>
        <div className="home__container">
          <h1 className="title">Your claims</h1>
          <Link to='/claim'>
          <div className="home__button">
            <Button type="plus" value="Create claim" />
          </div>
          </Link>
          <ClaimList />
          <Pagination/>
        </div>
      </main>
  );
};

export default Home;
