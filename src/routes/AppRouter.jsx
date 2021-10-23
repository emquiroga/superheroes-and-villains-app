import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
