import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import Login from "../pages/Login/Login";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AppRouter from "./AppRouter";

const LoginRouter = () => {
  const { log } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" auth={log} component={Login} />
        <PrivateRoute path="/" auth={log} component={AppRouter} />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
