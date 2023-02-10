import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SlLocationPin, SlUserFollow } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const NavbarTop = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    // https://i.ibb.co/rQ7xhVc/logo-ghirardelli-chocolate-mobile.png
    <div className="navbar bg-base-100">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
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
        <Link to="/">
          {" "}
          <img
            className="btn btn-ghost normal-case text-xl"
            src="https://i.ibb.co/yg3c67D/logo-ghirardelli-chocolate.png"
          ></img>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>
              Your Location <SlLocationPin></SlLocationPin>
            </a>
          </li>
          <li tabIndex={0}>
            <a></a>
          </li>
          <li>
            {user ? (
              <button
                type="button"
                class="btn btn-primary btn-secondary "
                onClick={handleSignOut}
              >
                <SlUserFollow />
              </button>
            ) : (
              <Link as={Link} to="login">
                <SlUserFollow />
              </Link>
            )}
            {/* <Link to="/login">
              <SlUserFollow />
            </Link> */}
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
      {pathname.includes("/dashboard") && (
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button btn-ghost lg:hidden"
        >
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      )}
    </div>
  );
};

export default NavbarTop;
