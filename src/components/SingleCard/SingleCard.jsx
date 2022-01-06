import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ hero, handleRemoveHero, handleAddHero }) => {
  return (
    <div className="card-wrapper">
      <div className="__card">
        <div className="front__card">
          <img alt={hero.name} src={hero.image.url} className="card__img" />
          <p className="card__name">{hero.name}</p>
        </div>
        <div className="back__card">
          <ul className="stats__list">
            <li>
              Intelligence
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${hero.powerstats.intelligence}%` }}
                  aria-valuenow={hero.powerstats.intelligence}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              Strength
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${hero.powerstats.strength}%` }}
                  aria-valuenow={hero.powerstats.strength}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              Speed{" "}
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${hero.powerstats.speed}%` }}
                  aria-valuenow={hero.powerstats.speed}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              Durability{" "}
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${hero.powerstats.durability}%` }}
                  aria-valuenow={hero.powerstats.durability}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              Power{" "}
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${hero.powerstats.power}%` }}
                  aria-valuenow={hero.powerstats.power}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              Combat{" "}
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${hero.powerstats.combat}%` }}
                  aria-valuenow={hero.powerstats.combat}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>Alignment: {hero.biography.alignment}</li>
          </ul>
          <div className="d-grid gap-1">
            {handleAddHero && (
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => handleAddHero(hero)}
              >
                Add
              </button>
            )}
            {handleRemoveHero && (
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveHero(hero.id)}
              >
                Remove
              </button>
            )}
            <Link className="card__link" to={`/character/id=${hero.id}`}>
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
