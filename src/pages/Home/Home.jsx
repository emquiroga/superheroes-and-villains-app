import React from "react";
import Team from "../../components/Team/Team";

const myTeam = localStorage.getItem("heroes");
const parsedTeam = JSON.parse(myTeam);

const Home = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center">Home</h1>
      {parsedTeam && <Team parsedTeam={parsedTeam} />}
    </div>
  );
};

export default Home;
