import React, { Component } from "react";
import UserConsumer from "../components/context";

class UpdateUser extends Component {
  state = {
    user: {},
  };

  changeInputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  findUser(users) {
    // const {id} = this.props.match.params;
    // const user = users.find((u) => u.id === "test-1");
    // this.setState({
    //   user: user
    // });
  }

  updateUser = (dispatch, e) => {
    e.preventDefault();
    const { id, name, salary, department } = this.state;
    dispatch({
      type: "UPDATE_USER",
      payload: {
        id,
        name,
        salary,
        department,
      },
    });
  };

  render() {
    const { name, salary, department } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch, users } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="card-header">
                  <h1> Edit User </h1>
                </div>
                <div className="card-body">
                  <form onSubmit={this.updateUser.bind(this, dispatch)}>
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
                    <button className="btn btn-success btn-block" type="submit">
                      Edit User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
export default UpdateUser;
