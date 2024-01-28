// import React from 'react';
import { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

async function LoginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await LoginUser({
      username,
      password,
    });
    // handle incorrect password here!
    let _username = "desmond"; // add database call here..
    let _password = "1234"; // add database call here..
    if (username === _username && password === _password) {
      setToken(token);
      window.location.href = "http://localhost:3000/dashboard";
    } else {
      alert("Either your usename or password is incorrect!");
      return;
    }
    // setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.prototype = {
  setToken: PropTypes.func.isRequired,
};
