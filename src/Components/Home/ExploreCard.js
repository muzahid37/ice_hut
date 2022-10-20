import React from "react";
import "../Style/home.css";

const ExploreCard = ({ exploreCard }) => {
  const { feraturedImg, name } = exploreCard;

  return (
    <div>
      <div className="card ExploreCard">
        <figure>
          <img src={feraturedImg} alt="feraturedImg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>

          <div className="card-actions justify-center">
            <button className="btn btn-outline btn-primary">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
