import React from "react";
import ExploreCards from "./ExploreCards";
import "../Style/home.css";
import ExploreButtom from "./ExploreButtom";

const Explore = () => {
  return (
    <div className="ExploreContainer mb-24">
      <ExploreCards></ExploreCards>
      <ExploreButtom></ExploreButtom>
    </div>
  );
};

export default Explore;
