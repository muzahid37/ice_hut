import React from "react";
import "../../Style/home.css";

const ExploreCard = ({ exploreCard }) => {
  const { productname, img } = exploreCard;

  return (
    <div>
      <div className="card ExploreCard">
        <figure>
          <img style={{ height: "250px" }} src={img} alt="feraturedImg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{productname}</h2>

          <div className="card-actions justify-center">
            <button className="btn btn-primary btn-outline exploreCardButton">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
