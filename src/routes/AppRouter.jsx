import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Search = lazy(() => import("../pages/Search/Search"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="container text-center mt-5">
            <h1 className="text-info">Loading...</h1>
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Redirect to="/home" />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
