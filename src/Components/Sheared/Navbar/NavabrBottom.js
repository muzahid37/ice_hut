import React from "react";
import { Link } from "react-router-dom";

import { BiChevronDown } from "react-icons/bi";
import NavChololateCatagori from "./NavChololateCatagori";

const NavabrBottom = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="m-auto hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <a>
                CHOCOLATE
                <BiChevronDown></BiChevronDown>
              </a>

              <ul className="p-2 bg-base-100">
                <NavChololateCatagori></NavChololateCatagori>
              </ul>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>

              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>

            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavabrBottom;
