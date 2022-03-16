import React from "react";
import { Link } from "react-router-dom";
//Import image(s):
import logo from "/public/assets/img/favicon.svg";

const Logo = () => {
  return (
    <Link to="/">
      <a href="/" className="logo">
        <img src={logo} alt="logo" width={48} height={48} />
      </a>
    </Link>
  );
};

export default Logo;
