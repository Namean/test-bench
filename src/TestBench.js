// import { useState } from "react";
import { micromark } from "micromark";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom/";
import Dashboard from "./test-bench/components/Dashboard/Dashboard";
import Preferences from "./test-bench/components/Preferences/Preferences";
import Resources from "./test-bench/components/Resources/Resources";
import Login from "./test-bench/components/Login/Login";
import Views from "./test-bench/components/Views/Views";
import {
  CourseList,
  NestingExample,
} from "./test-bench/components/Courses/Courses.js";
import "./test-bench/components/Login/Login.css";
import "./style.css";


import { appRouter } from './lib/utils/routes.js';

//import userToken from "/Users/allspark/Documents/src/test-bench/src/test-bench/userToken";
import { useTokenLocalStorage } from "./test-bench/userToken";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

const TestBench = () => {
  // const [token, setToken] = useState();
  // const token = getToken();

  // console.log(micromark("## Hello, *world*!"));
  const { token, setToken } = useTokenLocalStorage();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <header>
        <h1>Application</h1>
        <nav>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              listStyle: "none",
              marginRight: "10px",
            }}
          >
            <li>
              <a className="nav-link" href={appRouter.dashboard}>
                dashboard
              </a>
            </li>
            <li>
              <a className="nav-link" href="http://localhost:3000/preferences">
                preferences
              </a>
            </li>
            <li>
              <a className="nav-link" href="http://localhost:3000/resources">
                resources
              </a>
            </li>
            <li>
              <a className="nav-link" href="http://localhost:3000/views">
                views
              </a>
            </li>
            <li>
              <a className="nav-link" href="http://localhost:3000/courses">
                courses
              </a>
            </li>
            <li>
              <a className="nav-link" href="http://localhost:3000/nesting">
                nesting
              </a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "http://localhost:3000/";
          }}
        >
          log out
        </button>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/views">
            <Views />
          </Route>
          <Route path="/courses">
            <CourseList />
          </Route>
          <Route path="/nesting">
            <NestingExample />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
};

export default TestBench;
