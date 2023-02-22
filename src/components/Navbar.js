import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Users from "./Users";
import AddUser from "./AddUser";

const  Navbar = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
      <ul>
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
            <a href="/add"> Create User </a>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Default Title Value!",
};

export default Navbar;
