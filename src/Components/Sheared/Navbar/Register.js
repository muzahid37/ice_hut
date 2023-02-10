import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleREgister = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    navigate("/");
  };

  if (user) {
    console.log(user);
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className="text-primary text-4xl font-bold text-center my-10">
            REGISTER TO GHIRARDELLI
          </h2>

          <form className="loginForm mt-28" onSubmit={handleREgister} action="">
            <label className="label">
              <span className="label-text text-primary">
                What is your Name*
              </span>
            </label>
            <input
              className="loginFormEmail loginInput input w-full"
              type="text"
              name="name"
              id=""
              required
            />
            <br />
            <label className="label">
              <span className="label-text text-primary">
                What is your email*
              </span>
            </label>
            <input
              className="loginFormEmail loginInput input w-full"
              type="email"
              name="email"
              id=""
              required
            />
            <br />
            <label className="label">
              <span className="label-text text-primary">
                Inter Your password*
              </span>
            </label>
            <input
              className="loginFormPass loginInput input input-bordered w-full"
              type="password"
              name="password"
              id=""
              required
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn-primary submit"
            />
            <p>
              Have your account?{" "}
              <span className="text-danger  pe-auto">
                <Link to="/login">pleace sing in.</Link>
              </span>
            </p>
            <p>{error?.message}</p>
          </form>
          <button
            className="btn loginbtn btn-primary"
            // onClick={() => signInWithGoogle()}
          >
            Continue with google
          </button>
          <button onClick={() => signInWithGoogle()}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
