import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("http://localhost:8000/login", data, {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login__form">
      <h1 className="login__heading">Login Page</h1>
      <form onSubmit={handleSubmit}>
       
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login__input"

        />
     
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login__input"
        />
        <button type="submit" className="login__button">Log in</button>
      </form>
      <p className="login__message">
        Don't have an account? <Link to="/register" className="login__link">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
