import React from "react";
import auth from "../../../firebase.init";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (user || gUser) {
    navigate("/");
  }
  if (error) {
    console.log(error);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className="text-primary text-4xl font-bold text-center my-10">
            LOG IN TO GHIRARDELLI
          </h2>

          <form className="loginForm mt-28" onSubmit={handleLogin} action="">
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
                <Link to="/register">pleace sing up</Link>
              </span>
            </p>
            <p>{error?.message}</p>
          </form>
          <button
            className="btn loginbtn btn-primary"
            onClick={() => signInWithGoogle()}
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
