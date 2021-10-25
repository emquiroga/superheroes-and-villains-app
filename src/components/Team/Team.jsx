import React from "react";
import Card from "../../components/Cards/Card";
import "./team.css";

const Team = ({ parsedTeam }) => {
  const totalInt = parsedTeam.map(
    (parsedTeam) => parsedTeam.stats.intelligence
  );
  const totalStr = parsedTeam.map((parsedTeam) => parsedTeam.stats.strength);
  const totalSpeed = parsedTeam.map((parsedTeam) => parsedTeam.stats.speed);
  const totalDura = parsedTeam.map((parsedTeam) => parsedTeam.stats.durability);
  const totalPwr = parsedTeam.map((parsedTeam) => parsedTeam.stats.power);
  const totalCom = parsedTeam.map((parsedTeam) => parsedTeam.stats.combat);

  const handleRemove = () => {
    console.log(parsedTeam);
  };

  return (
    <div className="container-fluid text-center">
      <h2 className="text-center text-info">Team Stats:</h2>
      <ul className="totals-list">
        <li>
          Total Intelligence:{" "}
          <span className="text-danger">
            {totalInt.map((i) => Number(i)).reduce((a, b) => a + b)}
          </span>
        </li>
        <li>
          Total Strength:{" "}
          <span className="text-danger">
            {totalStr.map((i) => Number(i)).reduce((a, b) => a + b)}
          </span>
        </li>
        <li>
          Total Speed:{" "}
          <span className="text-danger">
            {totalSpeed.map((i) => Number(i)).reduce((a, b) => a + b)}
          </span>
        </li>
        <li>
          Total Durability:{" "}
          <span className="text-danger">
            {totalDura.map((i) => Number(i)).reduce((a, b) => a + b)}
          </span>
        </li>
        <li>
          Total Power:{" "}
          <span className="text-danger">
            {totalPwr.map((i) => Number(i)).reduce((a, b) => a + b)}
          </span>
        </li>
        <li>
          Total Combat:{" "}
          <span className="text-danger">
            {totalCom.map((i) => Number(i)).reduce((a, b) => a + b)}
          </span>
        </li>
      </ul>
      <div className="row">
        {parsedTeam.map((hero) => (
          <Card key={hero.heroID} {...hero} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default Team;
