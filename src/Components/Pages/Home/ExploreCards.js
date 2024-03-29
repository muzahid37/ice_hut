import React, { useEffect, useState } from "react";
import ExploreCard from "./ExploreCard";

const ExploreCards = () => {
  const [ExploreCards, setExploreCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setExploreCards(data));
  }, []);
  return (
    <div>
      <h2 className="ExploreHeader">Explore Feature</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
        {ExploreCards.slice(0, 4).map((exploreCard) => (
          <ExploreCard
            key={exploreCard._id}
            exploreCard={exploreCard}
          ></ExploreCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreCards;
