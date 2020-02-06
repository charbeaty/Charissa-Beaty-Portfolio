import React from "react";

const Navbar = () => {
    return (
        <div>
 <nav className="navbar navbar-expand-lg navbar-transparent static-top">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="./images/myLogo.png" width="120" height="120" alt="myLogo"></img></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    );
};

export default Navbar;