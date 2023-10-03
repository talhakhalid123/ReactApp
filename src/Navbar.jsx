import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  col-10 mx-auto">    
        <div className="container-fluid">
          
            
              <NavLink  className="navbar-brand" to="/">
                React Testing App
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink activeClassName="menu_active"  className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                  <NavLink activeClassName="menu_active" className="nav-link" to="/About">
                    About
                  </NavLink>
                  <NavLink activeClassName="menu_active" className="nav-link" to="/Services">
                    Services
                  </NavLink>
                  <NavLink activeClassName="menu_active" className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </div>
              </div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
