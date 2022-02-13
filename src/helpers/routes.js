import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { useCurrentUser } from "../hooks";

export function IsUserRedirect({ loggedInPath, children }) {
  const { currentUser } = useCurrentUser();

  if (currentUser) {
    return <Navigate replace to={loggedInPath} />
  }

  return children;
}

export function ProtectedRoute({ children }) {
  const { currentUser } = useCurrentUser();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate replace to={`${ROUTES.HOME}redirect`} state={{from: location }}/>
  }

  return children;
}
