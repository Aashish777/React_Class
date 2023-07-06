import React from "react";
import { Link } from "react-router-dom";

import "../../Auth.css";
import BackButton from "../../Component/authentication/BackButton";

const register = () => {
  return (
    <main className="authentication-wrapper flex ">
      <BackButton />
      <div className="authentication-div flex">
        <h3>Register</h3>
        <input type="text" className="input" placeholder="Username" />
        <input type="email" className="input" placeholder="email" />
        <input type="password" className="input" placeholder="Password" />
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
        />
        <button> Sign Up </button>
        <p>
          Already Have a account? Log in <Link to="/auth/login">Here</Link>
        </p>
      </div>
    </main>
  );
};

export default register;
