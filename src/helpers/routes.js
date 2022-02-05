import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { useCurrentUser } from "../hooks";

export function IsUserRedirect({ loggedInPath, children, ...rest }) {
  const { currentUser } = useCurrentUser();

  return (
    <Route
      {...rest}
      render={() => {
        if (!currentUser) {
          return children;
        }

        if (currentUser) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ children, ...rest }) {
  const { currentUser } = useCurrentUser();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (currentUser) {
          return children;
        }

        if (!currentUser) {
          return (
            <Redirect
              to={{
                pathname: `${ROUTES.HOME}redirect`,
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
