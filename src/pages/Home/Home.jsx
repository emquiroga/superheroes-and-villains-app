import React from "react";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <section className="home-page">
      <div className="container">
        <h1 className="main-title">Your team</h1>
        <Team />
      </div>
    </section>
  );
};

export default Home;
