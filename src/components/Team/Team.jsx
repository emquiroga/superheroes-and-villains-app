import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./team.css";

const Team = () => {
  const [heroes, setHeroes] = useState([]);

  // const totalInt = heroes.map((heroes) => heroes.stats.intelligence);
  // const totalStr = heroes.map((heroes) => heroes.stats.strength);
  // const totalSpeed = heroes.map((heroes) => heroes.stats.speed);
  // const totalDura = heroes.map((heroes) => heroes.stats.durability);
  // const totalPwr = heroes.map((heroes) => heroes.stats.power);
  // const totalCom = heroes.map((heroes) => heroes.stats.combat);

  // const totalHeight = heroes.map((heroes) => heroes.height[1]);
  // const totalWeight = heroes.map((heroes) => heroes.weight[1]);

  // console.log(totalWeight, totalHeight);

  useEffect(() => {
    const myTeam = localStorage.getItem("heroes");
    const parsedTeam = JSON.parse(myTeam);
    setHeroes(parsedTeam);
  }, []);

  const handleRemoveHero = (id) => {
    let updatedHeroes = [...heroes].filter((heroe) => heroe.heroID !== id);
    const newHeroes = JSON.stringify(updatedHeroes);
    localStorage.setItem("heroes", newHeroes);
    setHeroes(newHeroes);
  };

  return (
    <div className="container-fluid text-center">
      <hr />
      {/* <h2 className="text-info">Team Stats:</h2>
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
      <hr />
      <h2 className="text-info">Average stats: </h2>
      <ul className="totals-list">
        <li>Height:</li>
        <li>Weight: </li>
      </ul> */}
      <hr />
      <Cards heroes={heroes} handleRemoveHero={handleRemoveHero} />
    </div>
  );
};

export default Team;
