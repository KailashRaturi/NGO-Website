import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import "../Header/App.css";

const Header = () => {
  const [active, notActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const toggleHamburger = () => {
    notActive(active === "active" ? "" : "active");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={`heading-top ${scrolled ? "scrolled" : ""}`}>
        <header
          className={`header-inner d-flex justify-content-between align-items-center`}
        >
          <span className="logo">
            <img src={logo} alt="Logo" />
          </span>
          <ul className={`Header-list ${active} `}>
            <li>
              <a href={"#carouselExample"}>Home</a>
            </li>
            <li>
              <a href={"#contact"}>Volunteer</a>
            </li>
            <li>
              <a href={"#About"}>About Us</a>
            </li>
          </ul>
          <button className={`hamburger ${active}`} onClick={toggleHamburger}>
            <span className="bar top"></span>
            <span className="bar middle"></span>
            <span className="bar bottom"></span>
          </button>
        </header>
      </div>
    </>
  );
};

export default Header;
