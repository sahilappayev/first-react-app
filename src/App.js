import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <AddUser />,
  },
]);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="My First React App!" />
        <hr />
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
