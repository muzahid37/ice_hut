import React, { useEffect, useState } from 'react';
import FeaturedProduct from './FeaturedProduct';


const FeaturedProducts = () => {
    const [FeaturedProducts, setFeaturedProducts] = useState([]);
    useEffect(() => {
        fetch("FeaturedProducts.json")
            .then((res) => res.json())
            .then((data) => setFeaturedProducts(data));
    }, []);
    return (
       
            <div>
                <h2> Multiple items </h2>

                {
                    FeaturedProducts.map(featuredProduct => <FeaturedProduct
                        key={featuredProduct._id}
                        featuredProduct={featuredProduct}
                    ></FeaturedProduct>)

                }


            </div>
     
    



    );
};

export default FeaturedProducts;
