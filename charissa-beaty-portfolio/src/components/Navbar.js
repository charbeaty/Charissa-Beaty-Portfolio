import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
 <nav className="navbar navbar-expand-lg navbar-transparent static-top">
  <div className="container">
    <a className="navbar-brand" href="/">CharissaBeaty</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/connect"
          className={window.location.pathname === "/connect" ? "nav-link active" : "nav-link"}
        >
          Connect
        </Link>
      </li>
    </ul>
  </div>
</nav>
</div>
    );
};

export default Navbar;