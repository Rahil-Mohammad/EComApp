import React from "react";
import { Navigate } from "react-router-dom";
import { withUser } from "./withProvider";

function AuthRoute({ user, children }) {
  return user ? <Navigate to="/" /> : children;
}

export default withUser(AuthRoute);
