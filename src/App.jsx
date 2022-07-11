import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@components/Header/Header";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import Auth from "@pages/Auth/Auth";
import Home from "@pages/Home/Home";
import Claim from "@pages/Claim/Claim";
import NotFound from "@pages/Error/NotFound";

const App = () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Navbar isActive={navbarOpened} />
              <Header onClickMenu={() => setNavbarOpened(!navbarOpened)} />
              <Home onClickMain={() => setNavbarOpened(false)} />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Auth />
              <Footer />
            </>
          }
        />
        <Route
          path="/claim"
          element={
            <div className="container">
              <Navbar isActive={navbarOpened} />
              <Header onClickMenu={() => setNavbarOpened(!navbarOpened)} isSearch={false} />
              <Claim onClickMain={() => setNavbarOpened(false)} />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
