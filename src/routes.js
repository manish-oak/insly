import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "./layouts/default";

// Route Views
import Users from "./views/Users";

export default [
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  }
];
