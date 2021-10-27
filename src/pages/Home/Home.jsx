import React from "react";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container-fluid">
        <h1 className="gradient-text">Your team</h1>
        <Team />
      </div>
    </div>
  );
};

export default Home;
