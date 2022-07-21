import { Outlet } from "react-router-dom";
import { Header } from "@components/Header/Header";
import { Navbar } from "@components/Navbar/Navbar";
export const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Outlet />
    </div>
  );
};
