import React, { useEffect, useState } from "react";
import { displayHeroInfo } from "../../services/displayHeroInfo";

const HeroScreen = ({ history }) => {
  const [info, setInfo] = useState(false);
  const handleBack = () => {
    history.goBack();
  };
  const currentID = window.location.href.split("=")[1];
  useEffect(() => {
    displayHeroInfo(currentID, setInfo);
  }, [currentID]);

  return (
    <div className="heroscreen-page">
      {info && (
        <div className="container row">
          <div className="col-8">
            <img src={info.image.url} alt={info.id} className="img-thumbnail" />
          </div>
          <div className="col-4">
            <ul className="heroscreen-list mt-5">
              <li>Name: {info.name}</li>
              <li>Full Name: {info.biography["full-name"]}</li>
              <li>Alias: {info.biography.aliases}</li>
              <li>Weight: {info.appearance.weight[1]} </li>
              <li>Height: {info.appearance.height[1]}</li>
              <li>Eyes color: {info.appearance["eye-color"]}</li>
              <li>Hair color: {info.appearance["hair-color"]}</li>
              <li>Job: {info.work.occupation}</li>
            </ul>
            <button
              className="btn btn-outline-primary mt-2"
              onClick={handleBack}
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroScreen;
