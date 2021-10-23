import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1 className="navbar-brand">Superheroes & Villains App</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/home"
                aria-current="page"
                className="nav-link"
                activeClassName="active text-info"
              >
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/search"
                aria-current="page"
                className="nav-link"
                activeClassName="active text-info"
              >
                {" "}
                Hero finder{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
