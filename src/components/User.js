import React, { Component } from "react";
import "../css/user.css";
import PropTypes from "prop-types";

class User extends Component {
  static defaultProps = {
    name: "No info!",
    salary: 0,
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

  onDeleteUser = (e) => {
    const { id } = this.props;
    // Consumer Dispatch 
  };

  render() {
    // Destructing
    const { id, name, salary, department } = this.props;

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div
            className="card-header d-flex justify-content-between"
            onClick={this.onclickEvent}
          >
            <h1 className="d-inline">Name: {name}</h1>
            <i
              className="fa-sharp fa-solid fa-trash"
              style={{ cursor: "pointer" }}
              onClick={this.onDeleteUser}
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
  }
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  department: PropTypes.string.isRequired,
};

export default User;
