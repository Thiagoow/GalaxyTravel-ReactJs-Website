import React from "react";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";

const Header = () => {
  function btn() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-ul");
    const navLink = document.querySelectorAll(".nav-ul li");

    navLink.forEach((i) => i.addEventListener("click", closeMenu));

    hamburger.classList.toggle("active");
    navMenu.style.right = "0";

    function closeMenu() {
      hamburger.classList.remove("active");
    }
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
          <li className="item-link active">
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
