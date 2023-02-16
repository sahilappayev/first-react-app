import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Sahil Appayev",
        salary: 2500,
        department: "Software",
      },
      {
        id: 2,
        name: "Ali Zeynalov",
        salary: 3500,
        department: "Low",
      },
      {
        id: 3,
        name: "Zumrud Selimova",
        salary: 2700,
        department: "Agile",
      },
      {
        id: 4,
        name: "Nahid Nebiyev",
        salary: 1500,
        department: "Marketing",
      },
    ],
  };

  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter((user) => id !== user.id),
    });
  };

  render() {
    return (
      <div className="container">
        <hr />
        <Navbar />
        <Users users={this.state.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default App;
