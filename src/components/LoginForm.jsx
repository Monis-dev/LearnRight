import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-card">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="card-title">Sign In</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            name="username"
            id="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="submit-button">
          <button type="submit" className="btn-primary">
            Log In
          </button>
        </div>
      </form>

      <div className="social-login">
        <h4>
          <span>or continue with</span>
        </h4>

        <div className="redirect-links">
          <a href="#" className="social-icon">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="google-icon"
            />
          </a>
        </div>
      </div>

      <div className="signup-link">
        Don't have an account? <a href="#">Sign up</a>
      </div>
    </div>
  );
}

export default LoginForm;
