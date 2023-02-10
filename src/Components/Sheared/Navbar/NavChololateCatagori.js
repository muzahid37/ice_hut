import React from "react";
import { Link } from "react-router-dom";

const NavChololateCatagori = () => {
  return (
    <div className="ChocolateNav">
      <div className="ChocolateNavLsit">
        {" "}
        <li>
          <Link to="/chocolates">ALL CHOCOLATE</Link>
        </li>
        <li>
          <a>Submenu 2</a>
        </li>
      </div>
      <div className="ChocolateNavLsit">
        {" "}
        <li>
          <a>Submenu 1</a>
        </li>
        <li>
          <a>Submenu 2</a>
        </li>
      </div>
      <div className="ChocolateNavLsit">
        {" "}
        <li>
          <a>Submenu 1</a>
        </li>
        <li>
          <a>Submenu 2</a>
        </li>
      </div>
    </div>
  );
};

export default NavChololateCatagori;
