import { nanoid } from "nanoid";
import "@components/Navbar/Navbar.scss";
import logoCompany from "@img/logo-company-mini.svg";
import home from "@img/icon-home.svg";
import services from "@img/icon-services.svg";
import storage from "@img/icon-storage.svg";
import charts from "@img/icon-charts.svg";
import currency from "@img/icon-currency.svg";
import base from "@img/icon-base.svg";
import locations from "@img/icon-locations.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const isActive = useSelector((state) => state.home.navbar);
  const icons = [
    { id: nanoid(), img: home, text: "home" },
    { id: nanoid(), img: services, text: "services" },
    { id: nanoid(), img: storage, text: "storage" },
    { id: nanoid(), img: charts, text: "charts" },
    { id: nanoid(), img: currency, text: "currency" },
    { id: nanoid(), img: base, text: "base" },
    { id: nanoid(), img: locations, text: "locations" },
  ];

  return (
    <div className={isActive ? "navbar navbar--active" : "navbar"}>
      <div className="navbar__container">
        <nav className="navbar__nav">
          <Link to="/home" className="navbar__logo">
            <img src={logoCompany} alt="logo" />
          </Link>
          <ul className="navbar__list">
            {icons.map((item) =>
              item.text === "home" ? (
                <li className="navbar__item navbar__item--active" key={item.id}>
                  <Link to="/home" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={item.img} alt={item.text}></img>
                    <p>{item.text}</p>
                  </Link>
                </li>
              ) : (
                <li className="navbar__item" key={item.id}>
                  <img src={item.img} alt={item.text}></img>
                  <p>{item.text}</p>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
