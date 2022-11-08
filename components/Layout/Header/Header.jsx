import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "../../../src/assets/images/Ashraf.png";

const Header = () => {
  useEffect(() => {
    showMenu();
    removeMenu();
  }, []);

  const showMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }
  };

  const removeMenu = () => {
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove("show-menu");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));
  };

  //TODO: You should change that later
  // const scrollUp = () => {
  //   const scrollUp = document.getElementById("scroll-up");
  //   // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  //   if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  //   else scrollUp.classList.remove("show-scroll");
  // };
  // window.addEventListener("scroll", scrollUp);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link className="nav__logo" to="/">
          <img
            className="nav__logo-img"
            src={LogoImage}
            alt="Ashraf Etthamty Logo"
          />{" "}
          Ashraf
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/products" className="nav__link">
                Products
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink className="nav__link" to="/aboutUs">
                About Us
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink className="nav__link" to="/contactUs">
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
