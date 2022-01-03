import React, { useContext } from "react";
import SingleCard from "../SingleCard/SingleCard";

import { HeroesContext } from "../../contexts/HeroesContext";
import { heroesActions } from "../../actions/heroesActions";
import { getSumOf } from "../../helpers/getSumOf";

const Team = () => {
  const [heroes, dispatch] = useContext(HeroesContext);

  const handleRemoveHero = (id) => {
    dispatch({ type: heroesActions.remove, payload: id });
  };

  const totalInt = getSumOf(heroes, ["powerstats", "intelligence"]);
  const totalStr = getSumOf(heroes, ["powerstats", "strength"]);
  const totalSpeed = getSumOf(heroes, ["powerstats", "speed"]);
  const totalDura = getSumOf(heroes, ["powerstats", "durability"]);
  const totalPwr = getSumOf(heroes, ["powerstats", "power"]);
  const totalCom = getSumOf(heroes, ["powerstats", "combat"]);
  const totalHeight = getSumOf(heroes, ["appearance", "height", "1"], {
    formatter: (value) => value.slice(0, -3),
  });
  const totalWeight = getSumOf(heroes, ["appearance", "weight", "1"], {
    formatter: (value) => value.slice(0, -3),
  });

  const totalStats = [
    { name: "Intelligence", value: totalInt },
    { name: "Strength", value: totalStr },
    { name: "Speed", value: totalSpeed },
    { name: "Durability", value: totalDura },
    { name: "Power", value: totalPwr },
    { name: "Combat", value: totalCom },
  ].sort((a, b) => b.value - a.value);

  return (
    <div className="container text-center">
      <h2 className="text-info">Average Stats:</h2>
      <ul className="totals-list">
        {totalStats.map(({ name, value }) => (
          <li key={name}>
            Total {name}: <span className="text-info">{value}</span>
          </li>
        ))}
      </ul>
      <ul className="totals-list">
        <li>
          Height: <span className="text-info">{totalHeight}</span> cm.
        </li>
        <li>
          Weight: <span className="text-info">{totalWeight}</span> kg.
        </li>
      </ul>
      {heroes && (
        <div className="heroes-grid">
          {heroes.map((hero) => (
            <div className="col col-sm-6 " key={hero.id}>
              <SingleCard
                key={hero.id}
                hero={hero}
                handleRemoveHero={handleRemoveHero}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
