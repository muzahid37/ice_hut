import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Style/Chocolate.css";
import Chocolate from "./Chocolate";

const Chocolates = ({ chocolateType }) => {
  const [Chocolates, setChocolate] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/products?catagories=${chocolateType}`)
      .then((res) => res.json())
      .then((data) => setChocolate(data));
    // useEffect(() => {
    //   const getProducts = async () => {
    //     try {
    //       const res = await axios.get(
    //         chocolateType
    //           ? `http://localhost:5000/api/products?catagories=${chocolateType}`
    //           : "http://localhost:5000/api/products"
    //       );
    //       console.log(res.data);*
    //       setChocolate(res.data);
    //     } catch (err) {}
    //   };
    //   getProducts();
  }, [chocolateType]);

  console.log(chocolateType);
  return (
    <div>
      <div className="drawer drawer-mobile  mt-24">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            {Chocolates.map((chocolate) => (
              <Chocolate key={chocolate._id} chocolate={chocolate}></Chocolate>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chocolates;
