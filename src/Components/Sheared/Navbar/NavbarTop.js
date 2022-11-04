import React from "react";
// import { SlUserFollow } from "react-icons/sl";

const NavbarTop = () => {
  return (
    // https://i.ibb.co/rQ7xhVc/logo-ghirardelli-chocolate-mobile.png
    <div className="navbar bg-base-100">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        {/*-------------
         dasktop view
        ----------------
         */}
        {/* <img
          className="btn btn-ghost normal-case text-xl"
          src="https://i.ibb.co/yg3c67D/logo-ghirardelli-chocolate.png"
        ></img> */}
      </div>

      <div className="navbar-end lg:navbar-start">
        {" "}
        <img
          className="btn btn-ghost normal-case text-xl"
          src="https://i.ibb.co/yg3c67D/logo-ghirardelli-chocolate.png"
        ></img>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>dasktop</a>
          </li>
          <li tabIndex={0}>
            <a>dasktop</a>
          </li>
          <li>
            <a>dasktop</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:hidden flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>mobile</a>
          </li>
          <li tabIndex={0}>
            <a>mobile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
