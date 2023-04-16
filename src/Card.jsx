// bootstrap 5

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = (props) => {
  return (
    <>
          <div className="col-md-4 col-10 mx-auto">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imgsrc} className="card-img-top" height="300px" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {props.title} </h5>
          <p className="card-text">{props.note}</p>
          <a href={props.link} className="btn btn-outline-primary">
            Go for Details
          </a>
        </div>
      </div></div>
    </>
  );
};

export default Card;
