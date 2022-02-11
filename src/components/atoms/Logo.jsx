import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="">
      <a href="/" className="logo">
        <img
          src="/src/assets/img/favicon.svg"
          alt="logo"
          width={48}
          height={48}
        />
      </a>
    </Link>
  );
};

export default Logo;
