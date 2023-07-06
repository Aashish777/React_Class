import React from "react";
import "../../Auth.css";

import { Link } from "react-router-dom";
import BackButton from "../../Component/authentication/BackButton";

const login = () => {
  return (
    <main className="authentication-wrapper flex">
      <BackButton />
      <div className="authentication-div flex">
        <h3>Login</h3>
        <input type="text" className="input" placeholder="Username" />
        <input type="password" className="input" placeholder="Password" />
        <button>Sign In </button>
        <p>
          NO account? Create a new account <Link to="/auth/register">Here</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default login;
