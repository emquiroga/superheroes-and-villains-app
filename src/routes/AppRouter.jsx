import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Search from "../pages/Search/Search";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={Search} />
        <Redirect to="/home" />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default AppRouter;
