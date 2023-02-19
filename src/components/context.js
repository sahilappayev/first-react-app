import React, { Component } from "react";

// Provider and Consumer
const UserContext = React.createContext();

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
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
