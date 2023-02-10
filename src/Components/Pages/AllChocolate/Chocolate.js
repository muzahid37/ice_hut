import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../Style/Chocolate.css";
import "../../Style/Chocolate.css";

const Chocolate = ({ chocolate }) => {
  const { _id, productname, img } = chocolate;
  // console.log(productname, img);
  const navigate = useNavigate();

  const navigateToChocolateDetail = (id) => {
    navigate(`/ChocolateDetails/${id}`);
  };
  return (
    <div>
      <div className="card rounded-none	">
        <figure>
          <img className="chocolate_img" src={img} alt="feraturedImg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{productname}</h2>

          <div className="card-actions justify-center">
            <button className="btn btn-primary btn-outline exploreCardButton">
              SHOP NOW
            </button>
            <button
              className="btn btn-primary btn-outline exploreCardButton"
              onClick={() => navigateToChocolateDetail(_id)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chocolate;
