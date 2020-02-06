import React from "react";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbarHome">
    <div className="container">
    <ul className="nav navbar-na">
      <li className="nav-item">
        <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;