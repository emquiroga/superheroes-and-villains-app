import React from "react";
import { Link } from "react-router-dom";
import "./singlecard.css";

const SingleCard = ({
  heroName,
  url,
  stats,
  heroID,
  side,
  height,
  weight,
  handleRemoveHero,
  handleAddHero,
}) => {
  return (
    <div className="main-container container">
      <div className="card col-12 col-md-4">
        <div className="front-card">
          <img alt={heroName} src={url} className="card-img" loading="lazy" />
          <p className="card-name">{heroName}</p>
        </div>
        <div className="back-card container-fluid">
          <ul className="stats-list">
            <li>
              Intelligence
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${stats.intelligence}%` }}
                  aria-valuenow="25"
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
                  style={{ width: `${stats.strength}%` }}
                  aria-valuenow={stats.strength}
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
                  style={{ width: `${stats.speed}%` }}
                  aria-valuenow={stats.speed}
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
                  style={{ width: `${stats.durability}%` }}
                  aria-valuenow={stats.durability}
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
                  style={{ width: `${stats.power}%` }}
                  aria-valuenow={stats.power}
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
                  style={{ width: `${stats.combat}%` }}
                  aria-valuenow={stats.combat}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>Alignment: {side}</li>
          </ul>
          <div className="d-grid gap-1">
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={() =>
                handleAddHero({
                  heroName,
                  url,
                  stats,
                  heroID,
                  side,
                  height,
                  weight,
                })
              }
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveHero(heroID)}
            >
              Remove
            </button>
            <Link className="card-link" to={`/character/id=${heroID}`}>
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
