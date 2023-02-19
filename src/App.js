import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <Navbar title="My First React App!" />
        <Users />
      </div>
    );
  }
}

export default App;
