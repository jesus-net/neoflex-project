import { Routes, Route, Navigate } from "react-router-dom";
import Header from "@components/Header/Header";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import Auth from "@pages/Auth/Auth";
import Home from "@pages/Home/Home";
import NewClaim from "@pages/NewClaim/NewClaim";
import NotFound from "@pages/Error/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";

const Views = () => {
  const loggedIn = useSelector((state) => state.user.token);
  return (
    <Routes>
      {
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/home" />
            ) : (
              <>
                <Auth />
                <Footer />
              </>
            )
          }
        />
      }
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/home"
          element={
            <div className="container">
              <Navbar />
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/claim"
          element={
            <div className="container">
              <Navbar />
              <Header />
              <NewClaim />
            </div>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Views;
