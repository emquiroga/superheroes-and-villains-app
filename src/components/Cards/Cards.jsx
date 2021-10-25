import React from "react";
import SingleCard from "../SingleCard/SingleCard";

const Cards = ({ heroes, handleRemoveHero, handleAddHero }) => {
  return (
    <div className="row">
      {heroes &&
        heroes.map((hero) => (
          <SingleCard
            key={hero.heroID}
            {...hero}
            handleRemoveHero={handleRemoveHero}
            handleAddHero={handleAddHero}
          />
        ))}
    </div>
  );
};

export default Cards;
