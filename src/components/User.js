import React, { Component } from "react";
import "../css/user.css";
import PropTypes from "prop-types";
import UserConsumer from "./context";

class User extends Component {
  static defaultProps = {
    name: "No info!",
    salary: "No info!",
    department: "No info!",
  };

  state = {
    isVisible: false,   
  };

  onclickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;
    // Consumer Dispatch
    dispatch({ type: "DELETE_USER", payload: id });
  };

  render() {
    // Destructing
    const { name, salary, department } = this.props;
    const isVisible = this.state.isVisible;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={
                  isVisible
                    ? { backgroundColor: "#94f7f1", color: "#ff58e9" }
                    : null
                } 
              >
                <div
                  className="card-header d-flex justify-content-between"
                  onClick={this.onclickEvent}
                >
                  <h1 className="d-inline">Name: {name}</h1>
                  <i
                    className="fa-sharp fa-solid fa-trash"
                    style={{ cursor: "pointer" }}
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                  ></i>
                </div>
                {this.state.isVisible ? (
                  <div className="card-body">
                    <p className="card-text"> Salary: {salary} </p>
                    <p className="card-text"> Department: {department}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  department: PropTypes.string.isRequired,
};

export default User;
