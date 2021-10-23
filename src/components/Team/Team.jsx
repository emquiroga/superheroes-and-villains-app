import React from "react";
import Card from "../../components/Cards/Card";

const Team = ({ parsedTeam }) => {
  // console.log(parsedTeam);
  return (
    <div className="container-fluid">
      <h2 className="text-center">Team Stats:</h2>
      <ul>
        <li>Total Intelligence: {}</li>
        <li>Total Strength: {}</li>
        <li>Total Speed: {}</li>
        <li>Total Durability: {}</li>
        <li>Total Power: {}</li>
        <li>Total Combat: {}</li>
      </ul>
      <div className="row">
        {parsedTeam.map((hero) => (
          <Card key={hero.heroID} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default Team;
