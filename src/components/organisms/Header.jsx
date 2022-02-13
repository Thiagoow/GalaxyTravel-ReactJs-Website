import React from "react";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";

const Header = () => {
  function btn() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-ul");
    const navLink = document.querySelectorAll(".nav-ul li");

    hamburger.classList.toggle("open");
    // Make the navMenu appears from the right:
    navMenu.style.right = "0";

    // If hamburguer isn't open, navMenu go back from the right:
    if (hamburger.classList.contains("open") === false) {
      navMenu.style.right = "-60%";
    }

    function closeMenu() {
      hamburger.classList.remove("open");
      navMenu.style.right = "-60%";
    }

    // Close navMenu when click on any link from nav-ul:
    navLink.forEach((i) => i.addEventListener("click", closeMenu));
  }

  return (
    <header className="header">
      <Logo />

      <nav className="nav-menu">
        <div class="hamburger" onClick={btn}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>

        <ul className="nav-ul">
          <li className="item-link">
            <Link to="/">
              <b>00</b> Home
            </Link>
          </li>

          <li className="item-link">
            <Link to="/destination">
              <b>01</b> Destination
            </Link>
          </li>

          <li className="item-link">
            <Link to="/crew">
              <b>02</b> Crew
            </Link>
          </li>

          <li className="item-link">
            <Link to="/technology">
              <b>03</b> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
