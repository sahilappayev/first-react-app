import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Users from "../components/Users";
import AddUser from "../forms/AddUser";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-4">
      <a href="/" className="navbar-brand">
        {title}
      </a> 
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>

        <li className="nav-item active">
          <a href="/add" className="nav-link">
            Create User
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Default Title Value!",
};

export default Navbar;
