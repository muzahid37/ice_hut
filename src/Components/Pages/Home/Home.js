import React from "react";
// import Footer from "../Sheared/Footer";
import Banner from "./Banner";
import Explore from "./Explore";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Explore></Explore>
    </div>
  );
};

export default Home;
