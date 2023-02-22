import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Users";
import ErrorPage from "../pages/ErrorPage";
import AddUser from "../forms/AddUser";
import UpdateUser from "../forms/UpdateUser";

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
  {
    path: "/edit/:id",
    element: <UpdateUser />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
