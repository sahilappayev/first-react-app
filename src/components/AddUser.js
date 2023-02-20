import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "./context";

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

var uniqid = require("uniqid");

export class AddUser extends Component {
  state = {
    visible: false,
    name: "",
    salary: 0,
    department: "",
  };

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  changeInputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (dispatch, e) => {
    e.preventDefault();
    const { name, salary, department } = this.state;
    dispatch({
      type: "ADD_USER",
      payload: {
        id: uniqid(),
        name,
        salary,
        department,
      },
    });
  };

  render() {
    const { visible, name, salary, department } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <button
                className="btn btn-info btn-block mb-2"
                onClick={this.changeVisibility}
              >
                {visible ? "Hide Form" : "Show   Form"}
              </button>

              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h1> Add User Form </h1>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.addUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name"> Name </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          id="name"
                          className="form-control"
                          value={name}
                          onChange={this.changeInputValue}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="name"> Salary </label>
                        <input
                          type="number"
                          name="salary"
                          placeholder="Enter salary"
                          id="salary"
                          className="form-control"
                          value={salary}
                          onChange={this.changeInputValue}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="name"> Department </label>
                        <input
                          type="text"
                          name="department"
                          placeholder="Enter department"
                          id="department"
                          className="form-control"
                          value={department}
                          onChange={this.changeInputValue}
                        ></input>
                      </div>
                      <button
                        className="btn btn-success btn-block"
                        type="submit"
                      >
                        Add User
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
