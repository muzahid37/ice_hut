import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/home.css";

const FeaturedProducts = () => {
  const [FeaturedProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    fetch("FeaturedProducts.json")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="FeaturedProducts">
      <h2> Multiple items: {FeaturedProducts.length} </h2>
      <Slider {...settings}>
        {FeaturedProducts.map((featuredProduct) => (
          <div className="card">
            <div className="overflow-hidden">
              {" "}
              <img src={featuredProduct.feraturedImg} />
            </div>

            <h2>{featuredProduct.name}</h2>
            <button className="btn btn-primary">SHOP NOW</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
