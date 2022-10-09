import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Style/home.css"


const FeaturedProduct = ({ featuredProduct }) => {
    const { feraturedImg, name } = featuredProduct;
    // console.log(feraturedImg)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div>
          
          <Slider {...settings}>
          <div className='FeaturedProduct-wraper'>
                <img src={feraturedImg}></img>
                <h2>{name}</h2>

            </div>
           
           
          </Slider>
        </div>
      );
    }


export default FeaturedProduct;