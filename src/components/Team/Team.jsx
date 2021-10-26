import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./team.css";

const Team = () => {
  const [heroes, setHeroes] = useState([]);

  // const totalInt = heroes.map((heroes) => heroes.powerstats.intelligence);
  // const totalStr = heroes.map((heroes) => heroes.powerstats.strength);
  // const totalSpeed = heroes.map((heroes) => heroes.powerstats.speed);
  // const totalDura = heroes.map((heroes) => heroes.powerstats.durability);
  // const totalPwr = heroes.map((heroes) => heroes.powerstats.power);
  // const totalCom = heroes.map((heroes) => heroes.powerstats.combat);

  // const totalHeight = heroes.map((heroes) => heroes.appearance.height[1]);
  // const totalWeight = heroes.map((heroes) => heroes.appearance.weight[1]);

  const handleRemoveHero = (id) => {
    let updatedHeroes = [...heroes].filter((hero) => hero.id !== id);
    const newHeroes = JSON.stringify(updatedHeroes);
    localStorage.setItem("heroes", newHeroes);
    setHeroes(newHeroes);
  };

  const handleStats = (stat) => {
    const stats = heroes
      .map((hero) => {
        return Number(hero.powerstats[stat]);
      })
      .reduce((a, b) => a + b);

    console.log(stats);
  };

  useEffect(() => {
    const myTeam = localStorage.getItem("heroes");
    const parsedTeam = JSON.parse(myTeam);
    setHeroes(parsedTeam);
  }, []);

  return (
    <div className="container-fluid text-center">
      <hr />
      <h2 className="text-info">Team Stats:</h2>
      {/* <ul className="totals-list">
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
      </ul> */}
      <hr />
      <h2 className="text-info">Average stats: </h2>
      <ul className="totals-list">
        <li>Height:</li>
        <li>Weight: </li>
      </ul>
      <hr />
      <Cards heroes={heroes} handleRemoveHero={handleRemoveHero} />
    </div>
  );
};

export default Team;
