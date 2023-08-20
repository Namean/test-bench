// import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom/";
import Dashboard from "./test-bench/components/Dashboard/Dashboard";
import Preferences from "./test-bench/components/Preferences/Preferences";
import Login from "./test-bench/components/Login/Login";
import "./test-bench/components/Login/Login.css";
// import userToken from "/Users/allspark/Documents/src/test-bench/src/test-bench/useToken";
import { useTokenSession, useTokenLocalStorage } from "./test-bench/useToken";
// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

const students = [
  {
    student_id: "001",
    first_name: "John",
    last_name: "Smith",
    age: 18,
    grade: "A",
    course_id: "101",
    courses: [101, 102],
  },
  {
    student_id: "002",
    first_name: "Emily",
    last_name: "Johnson",
    age: 19,
    grade: "B",
    course_id: "102",
    courses: [101, 1],
  },
  {
    student_id: "003",
    first_name: "Michael",
    last_name: "Williams",
    age: 20,
    grade: "A",
    course_id: "103",
  },
];

const courses = [
  {
    course_id: "103",
    course_name: "Mathematics",
    instructor: "Prof. Anderson",
  },
  {
    course_id: "102",
    course_name: "English",
    instructor: "Prof. Thompson",
  },
  {
    course_id: "103",
    course_name: "Science",
    instructor: "Prof. Parker",
  },
];

const TestBench = () => {
  // const [token, setToken] = useState();
  // const token = getToken();

  const { token, setToken } = useTokenLocalStorage();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default TestBench;
