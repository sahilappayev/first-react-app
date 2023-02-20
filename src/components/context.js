import React, { Component } from "react";

// Provider and Consumer
const UserContext = React.createContext();

// Reducer
const reducer = (state, action) => {
  console.log("ACTION: ", action);
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

// Provider
export class UserProvider extends Component {
  state = {
    users: [
      {
        id: "test-1",
        name: "Sahil Appayev",
        salary: 2500,
        department: "Software",
      },
      {
        id: "test-2",
        name: "Ali Zeynalov",
        salary: 3500,
        department: "Low",
      },
      {
        id: "test-3",
        name: "Zumrud Selimova",
        salary: 2700,
        department: "Agile",
      },
      {
        id: "test-4",
        name: "Nahid Nebiyev",
        salary: 1500,
        department: "Marketing",
      },
    ],

    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

// Consumer
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
