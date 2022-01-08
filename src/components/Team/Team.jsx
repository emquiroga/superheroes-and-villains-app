import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import SingleCard from "../SingleCard/SingleCard";

import { HeroesContext } from "../../contexts/HeroesContext";
import { heroesActions } from "../../actions/heroesActions";

const Team = () => {
  const [heroes, dispatch] = useContext(HeroesContext);

  const handleRemoveHero = (id) => {
    dispatch({ type: heroesActions.remove, payload: id });
  };

  const filterNullish = (value) => Boolean(value) && value !== "null";

  const getProperty = (value, properties) =>
    properties.reduce((soFar, property) => soFar[property] || {}, value);

  const getSumOf = (list, properties, { formatter = (v) => v } = {}) =>
    list
      .map((value) => formatter(getProperty(value, properties)))
      .filter(filterNullish)
      .map(Number)
      .reduce((a, b) => a + b, 0);

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
    <div className="container">
      {heroes.length > 0 ? (
        <div className="stats-container">
          <h2 className="sub-title">Average Stats:</h2>
          <ul className="totals__list">
            {totalStats.map(({ name, value }) => (
              <li key={name}>
                Total {name}: <span className="text-info">{value}</span>
              </li>
            ))}
          </ul>
          <ul className="totals__list">
            <li>
              Height: <span className="text-info">{totalHeight}</span> cm.
            </li>
            <li>
              Weight: <span className="text-info">{totalWeight}</span> kg.
            </li>
          </ul>
        </div>
      ) : (
        <h2 className="sub-title">
          Get some heroes and villains in our
          <NavLink
            to="/search"
            aria-current="page"
            className="nav-link"
            activeClassName="active text-info"
          >
            HERO FINDER
          </NavLink>
        </h2>
      )}
      {heroes && (
        <div className="heroes-grid">
          {heroes.map((hero) => (
            <SingleCard
              key={hero.id}
              hero={hero}
              handleRemoveHero={handleRemoveHero}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
