import "./Login.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    console.log("logged in");
  };

  return (
    <div id="login-page">
      <h1>Login to Travel Companion</h1>
      <div className="login-info-box">
        <p>User expires after 1 hour!</p>
      </div>
      <form className="login-form auth-form form" onSubmit={submitLogin}>
        <label>
          <span>Username:</span>
          <input
            required
            className="login-input"
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            className="login-input"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type="submit" className="btn btn-login">
          Login!
        </button>
      </form>
      <div className="signup-box">
        <h2>Or create new account here:</h2>
        <Link className="signup-link auth-link" to={"/signup"}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
