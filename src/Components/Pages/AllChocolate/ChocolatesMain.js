import React, { useState } from "react";
import Banner from "../Home/Banner";
import Chocolates from "./Chocolates";

const ChocolatesMain = () => {
  const [chocolateType, setChocolateType] = useState([]);
  function handleChocolate(e) {
    const { value, checked } = e.target;
    // console.log(value, checked);
    if (checked) {
      setChocolateType((pre) => [...pre, value]);
    } else
      setChocolateType((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
  }
  //   console.log(chocolateType);
  return (
    <div>
      <div className="chocolateBAnner text-center">
        <Banner></Banner>
        <h2>
          <strong> Ghirardelli Chocolate - Makes Life a Bite Better</strong>
        </h2>
        <p>
          Delicious, Decadent, Luxurious, and Velvety Soft. Shop from our
          best-selling collection of Milk, Dark and White Chocolates. Great to
          share, gift or simply self-indulge.
        </p>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Chocolates chocolateType={chocolateType}></Chocolates>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <h1 className="text-4xl text-center">
              <strong>All Chocolate</strong>
            </h1>
            <h2 className="text-center text-2xl">
              <strong>Filter</strong>
            </h2>

            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Dark</span>
                <input
                  type="checkbox"
                  onChange={handleChocolate}
                  value="Dark"
                  className="checkbox checkbox-accent"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Milk</span>
                <input
                  type="checkbox"
                  onChange={handleChocolate}
                  value="Milk"
                  className="checkbox checkbox-accent"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Mango</span>
                <input
                  type="checkbox"
                  onChange={handleChocolate}
                  value="Mango"
                  className="checkbox checkbox-accent"
                />
              </label>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChocolatesMain;
