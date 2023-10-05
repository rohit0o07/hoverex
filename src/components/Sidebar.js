import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import MenuPopupState from "../components/menudropdowns/Home";
import PagePopState from "../components/menudropdowns/Page";
import FeaturePopupState from "../components/menudropdowns/Feature";
import StorePopupState from "../components/menudropdowns/Store";
import BlogPopupState from "../components/menudropdowns/Blog";
import LanguagePopupState from "../components/menudropdowns/Language";
import ContactPopupState from "../components/menudropdowns/contact";


function Sidebar() {
  return (
    <div className="Header">
      <div className="Header-left">
        <img src="https://hoverex.themerex.net/splash/img/logo.png" alt="" />
      </div>
      <div className="Header-right">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuPopupState />
            </Link>
          </li>
          <li>
            <Link to="/pages" style={{ textDecoration: "none" }}>
              <PagePopState />
            </Link>
          </li>
          <li>
            <Link to="/features" style={{ textDecoration: "none" }}>
              <FeaturePopupState />
            </Link>
          </li>
          <li>
            <Link to="/store" style={{ textDecoration: "none" }}>
              <StorePopupState />
            </Link>
          </li>
          <li>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <BlogPopupState />
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <ContactPopupState />
            </Link>
          </li>
          <li>
            <Link to="/language" style={{ textDecoration: "none" }}>
              <LanguagePopupState />
            </Link>
          </li>
          <li>
            <Link to="/button">
            <button className="btn-log">Login or Register</button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
