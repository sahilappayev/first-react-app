import React, { Component } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import { RouterProvider } from "react-router-dom";
import Router from "./components/Router";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="My First React App!" />
        <hr />
        <Router/>
      </div>
    );
  }
}

export default App;
