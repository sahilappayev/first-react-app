import React, { Component } from "react";
import posed from "react-pose";

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

export class AddUser extends Component {
  state = {
    visible: false,
  };

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const { visible } = this.state;

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
              <form>
                <div className="form-group">
                  <label htmlFor="name"> Name </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    id="name"
                    className="form-control"
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
                  ></input>
                </div>
                <button className="btn btn-success btn-block" type="submit">
                  Add User
                </button>
              </form>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}

export default AddUser;
