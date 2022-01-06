import React, { useEffect, useState } from "react";
import { getHeroInfo } from "../../services/getHeroInfo";

const HeroScreen = ({ history }) => {
  const [info, setInfo] = useState(false);
  const handleBack = () => {
    history.goBack();
  };
  const currentID = window.location.href.split("=")[1];

  useEffect(() => {
    getHeroInfo(currentID)
      .then((data) => {
        setInfo(data);
      })
      .catch((err) => console.log(err));
  }, [currentID]);

  return (
    <section className="hero-screen-section">
      <div className="container">
        {info && (
          <div className="hero-info-container">
            <img src={info.image.url} alt={info.id} className="heroe__img" />
            <ul className="heroe__info">
              <li>
                <span className="required-alert">Name:</span> {info.name}
              </li>
              <li>
                <span className="required-alert">Full Name:</span>{" "}
                {info.biography["full-name"]}
              </li>
              <li>
                <span className="required-alert">Alias:</span>{" "}
                {info.biography.aliases
                  ? info.biography.aliases.map((aliases) => (
                      <p key={aliases}>{aliases}</p>
                    ))
                  : null}
              </li>
              <li>
                <span className="required-alert">Weight:</span>{" "}
                {info.appearance.weight[1]}{" "}
              </li>
              <li>
                <span className="required-alert">Height:</span>{" "}
                {info.appearance.height[1]}
              </li>
              <li>
                <span className="required-alert">Eyes color:</span>{" "}
                {info.appearance["eye-color"]}
              </li>
              <li>
                <span className="required-alert">Hair color:</span>{" "}
                {info.appearance["hair-color"]}
              </li>
              <li>
                <span className="required-alert">Job:</span>{" "}
                {info.work.occupation}
              </li>
            </ul>
            <button className="btn btn-warning mt-3" onClick={handleBack}>
              Go back
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroScreen;
