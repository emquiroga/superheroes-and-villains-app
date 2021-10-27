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
    <div className="heroscreen-page d-flex justify-content-center">
      {info && (
        <>
          <img src={info.image.url} alt={info.id} className="img-thumbnail" />

          <ul className="heroscreen-list">
            <li>
              <span className="text-danger">Name:</span> {info.name}
            </li>
            <li>
              <span className="text-danger">Full Name:</span>{" "}
              {info.biography["full-name"]}
            </li>
            <li>
              <span className="text-danger">Alias:</span>{" "}
              {info.biography.aliases}
            </li>
            <li>
              <span className="text-danger">Weight:</span>{" "}
              {info.appearance.weight[1]}{" "}
            </li>
            <li>
              <span className="text-danger">Height:</span>{" "}
              {info.appearance.height[1]}
            </li>
            <li>
              <span className="text-danger">Eyes color:</span>{" "}
              {info.appearance["eye-color"]}
            </li>
            <li>
              <span className="text-danger">Hair color:</span>{" "}
              {info.appearance["hair-color"]}
            </li>
            <li>
              <span className="text-danger">Job:</span> {info.work.occupation}
            </li>
          </ul>
          <button className="btn btn-info mt-2" onClick={handleBack}>
            Go back
          </button>
        </>
      )}
    </div>
  );
};

export default HeroScreen;
