import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { authActions } from "../../actions/authActions";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: authActions.logout });
    history.replace("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-title gradient-text">Superheroes & Villains</h1>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/home"
                aria-current="page"
                className="nav-link"
                activeClassName="active text-info"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/search"
                aria-current="page"
                className="nav-link"
                activeClassName="active text-info"
              >
                Hero finder
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
