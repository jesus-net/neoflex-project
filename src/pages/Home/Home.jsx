import React, {useState} from "react";
import { Link } from "react-router-dom";
import "@pages/Home/Home.scss";
import Button from "@UI/Button/Button";
import ClaimList from "@components/Claim-list/Claim-list";
import Pagination from "@components/Pagination/Pagination";

const Home = ({onClickMain}) => {

  return (
      <main className="home" onClick={onClickMain}>
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
