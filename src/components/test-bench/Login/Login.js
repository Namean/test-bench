// import React from 'react';
import { useState } from "react";
import PropTypes from "prop-types";

import "./Login.css";

const localhost = "127.0.0.1";
const client_port = process.env.APP_PORT ? process.env.CLIENT_PORT : "3000";
const auth_api_port = process.env.API_PORT ? process.env.AUTH_API_PORT : "8080";
const ip = process.env.LOCAL_IP ? process.env.LOCAL_IP : localhost;

// const pathObject = {
//   protocol: "http",
//   hostname: "127.0.0.1",
//   port: 3000,
//   route: "",
//   get getUrl() {
//     const { hostname, protocol, port, route } = this;

//     return route == ""
//       ? `${protocol}://${hostname}:${port}/`
//       : `${protocol}://${hostname}:${port}/${route}`;
//   },
//   setRoute: function (route) {
//     this.route = route;
//   },
// };

const authAPI = {
  protocol: "http",
  hostname: "127.0.0.1",
  port: auth_api_port,
  get url() {
    const { hostname, protocol, port } = this;

    return `${protocol}://${hostname}:${port}/`;
  },
  getRoute(route) {
    const { hostname, protocol, port } = this;

    return `${protocol}://${hostname}:${port}/${route}`;
  },
  setRoute: function (route) {
    this.route = route;
  },
};

// function pathBuilder(
//   protocol = "http",
//   hostname = "127.0.01",
//   port = 3000,
//   route = ""
// ) {
//   const pathObject = {
//     protocol: protocol,
//     hostname: "127.0.0.1",
//     port: port,
//     route: route,
//     get getUrl() {
//       const { hostname, protocol, port, route } = this;

//       return route == ""
//         ? `${protocol}://${hostname}:${port}/`
//         : `${protocol}://${hostname}:${port}/${route}`;
//     },
//     setRoute: function (route) {
//       this.route = route;
//     },
//   };

//   return pathObject;
// }

// const auth = {
//   route: `${__origin}:${API_PORT}`,
//   login: `${__origin}:${API_PORT}`,
// };

// const api = {
//   route: `${__origin}:${API_PORT}`,
// };

// const app = {
//   dashboard: `${__origin}:${APP_PORT}/dashboard`,
// };

async function LoginUser(credentials) {
  return fetch(authAPI.getRoute("login"), {
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
      // window.location.href = app.dashboard;
      window.location.href = `http://${localhost}:${client_port}/dashboard`;
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
