import React from "react";
import "./card.css";

const Card = ({ heroName, url, stats, heroID, side, toggle, handleAdd }) => {
  return (
    <div className="main-container container">
      <div className="card col-12 col-md-4">
        <div className="front-card">
          <img alt={heroName} src={url} className="card-img" />
          <p className="card-name">{heroName}</p>
        </div>
        <div className="back-card">
          <h3>Powerstats</h3>
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
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleAdd({ heroName, url, stats, heroID, side })}
          >
            Add
          </button>
          <button type="button" className="btn btn-danger">
            Remove
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
