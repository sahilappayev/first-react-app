import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <Navbar title="My First React App!" />
        <AddUser /> 
        <Users />
      </div>
    );
  }
}

export default App;
