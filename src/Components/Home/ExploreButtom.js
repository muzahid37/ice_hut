import React from "react";
import "../Style/home.css";

const ExploreButtom = () => {
  return (
    <div>
      <div className="ExploreStoreCard ExploreStoreCardTop flex">
        <div className="ExploreStoreCardLeft">
          <img
            className="ExploreStoreCardImage"
            src="
            https://i.ibb.co/W2bMv4K/GCC-Explore-Classics-Table.jpg"
          ></img>
        </div>
        <div className="ExploreStoreCardRight">
          <h2>Find a Ghirardelli Store</h2>
          <article>
            Visit your local Ghirardelli Store for a complete sensory experience
            with chocolates, ice-cream fountains, and our in-store exclusives.
          </article>
          <button className="btn btn-outline btn-primary px-14">Button</button>
        </div>
      </div>
      <div className="ExploreStoreCard ExploreStoreCardBottom flex">
        <div className="ExploreStoreCardRight">
          <h2>Find a Ghirardelli Store</h2>
          <article>
            Visit your local Ghirardelli Store for a complete sensory experience
            with chocolates, ice-cream fountains, and our in-store exclusives.
          </article>
          <button className="btn btn-outline btn-primary px-14 ">Button</button>
        </div>
        <div className="ExploreStoreCardLeft">
          <img
            className="ExploreStoreCardImage"
            src=" https://i.ibb.co/W2bMv4K/GCC-Explore-Classics-Table.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ExploreButtom;
