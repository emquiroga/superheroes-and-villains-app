import React from "react";
import "./modal.css";

const Modal = ({
  url,
  fullName,
  alias,
  heightAndWeight,
  eyeColor,
  hairColor,
  job,
  open,
  toggle,
}) => {
  return (
    <>
      {open ? (
        <div className="modal-background">
          <div className="modal-container">
            <img src={url} alt={fullName} className="img-modal" />
            <ul className="modal-list">
              Full Name: {fullName}
              <li>Alias: {alias}</li>
              <li>Weight: {heightAndWeight.weight}</li>
              <li>Height: {heightAndWeight.height}</li>
              <li>Eyes color: {eyeColor}</li>
              <li>Hair color: {hairColor}</li>
              <li>Job: {job}</li>
            </ul>
            <button className="btn btn-danger btn-modal" onClick={toggle}>
              Close modal
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
