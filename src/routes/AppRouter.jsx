import React, { lazy, Suspense, useEffect, useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { HeroesContext } from "../contexts/HeroesContext";
import { HeroesReducer } from "../reducers/HeroesReducer";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Search = lazy(() => import("../pages/Search/Search"));
const HeroScreen = lazy(() => import("../pages/HeroScreen/HeroScreen"));

const init = () => {
  return JSON.parse(localStorage.getItem("heroes")) || [];
};
const AppRouter = () => {
  const [heroes, dispatch] = useReducer(HeroesReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("heroes", JSON.stringify(heroes));
  }, [heroes]);

  return (
    <>
      <Navbar />
      <HeroesContext.Provider value={[heroes, dispatch]}>
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
            <Route exact path="/character/:id" component={HeroScreen} />
            <Redirect to="/home" />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Suspense>
      </HeroesContext.Provider>
    </>
  );
};

export default AppRouter;
