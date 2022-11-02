import React from "react";
import Footer from "../Sheared/Footer";
import Explore from "./Explore";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  return (
    <div>
      <FeaturedProducts></FeaturedProducts>
      <Explore></Explore>
    </div>
  );
};

export default Home;
