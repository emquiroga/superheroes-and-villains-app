import React from "react";
import { Route, Redirect } from "react-router";

const PublicRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !auth.token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
