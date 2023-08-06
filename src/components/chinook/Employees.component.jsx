import employeeData from "../../data/employees";

import "../../styles/Employees.css";
import W3SchoolsForm from "../forms/W3SchoolsForm.component";

// import useFetch from "../../lib/hooks/useFetch";

import { useState } from "react";
// import { EmployeeDetails } from "../chinook/Employees.component";
const EmployeesContainer = () => {
  const [inputs, setInputs] = useState({});
  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState({});

  const state = {
    inputs: inputs,
    setInputs: setInputs,
    people: people,
    setPeople: setPeople,
    selected: selected,
    setSelected: setSelected,
  };

  const enhancedPeople = people.map((idx, index) => (idx.id = index + 1));

  const removePerson = (id) => {
    console.log(id);
    console.log(people);
    let filteredList = people.filter((idx) => !(idx.id === id));
    console.log(filteredList);
    setPeople(filteredList);
  };

  const peopleList = people.map((idx, index) => {
    return (
      <div id={index + 1} key={index + 1}>
        <li key={index + 10}>
          {index + 1}. {idx.username}: {idx.age} | {idx.id}
        </li>
        <button key={index + 100} onClick={() => removePerson(idx.id)}>
          remove me!
        </button>
      </div>
    );
  });
  const MainNav = () => {
    return (
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <li className="main-nav-flex-item">home</li>
        <li className="main-nav-flex-item">about</li>
        <li className="main-nav-flex-item">contact</li>
        <input
          style={{ marginLeft: "20px", marginTop: "5px" }}
          placeholder="search"
        />
      </nav>
    );
  };

  return (
    <>
      <MainNav />
      <div className="grid-container">
        <div className="scrollmenu">
          <Employees className={"grid-item"} state={state} />
        </div>
        <EmployeeDetails className={"grid-item"} state={state} />
      </div>
    </>
  );
};

const imgUrls = [
  "http://localhost:3000/img/profile/profile-male-01.jpg",
  "http://localhost:3000/img/profile/profile-female-01.jpg",
  "http://localhost:3000/img/profile/profile-female-02.jpg",
  "http://localhost:3000/img/profile/profile-female-03.jpg",
  "http://localhost:3000/img/profile/profile-male-02.jpg",
  "http://localhost:3000/img/profile/profile-male-03.jpg",
  "http://localhost:3000/img/profile/profile-male-04.jpg",
  "http://localhost:3000/img/profile/profile-female-04.jpg",
];
let gender = [
  "male",
  "female",
  "female",
  "female",
  "male",
  "male",
  "male",
  "female",
];
employeeData.map((idx, index) => (idx.imgUrl = imgUrls[index]));
employeeData.map((idx, index) => (idx.gender = gender[index]));

const data = employeeData;

//   EmployeeId
// LastName
// FirstName
// Title
// ReportsTo
// BirthDate
// HireDate
// Address
// City
// State
// Country
// PostalCode
// Phone
// Fax
// Email
// gender

const EmployeeDetailsForm = ({ state }) => {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setPeople([...people, inputs]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          // value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          // value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your Hire Date:
        <input
          id="hiredate"
          type="date"
          name="hiredate"
          // value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <label for="phone">Enter your phone number:</label>

      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />
      <small>Format: 123-456-7890</small>
      <input type="submit" />
    </form>
  );
};

const Employees = ({ className, state }) => {
  const sameEmployees = () => {
    return (
      <div className="employee-container">
        {data &&
          data.map((idx, index) => {
            return (
              <div className="employee-list-item-container">
                <img src={""} alt="random profile" />

                <li
                  key={index}
                  id={idx.EmployeeId}
                  className="employee-list-item"
                >
                  <p className="employee-name">
                    {idx.FirstName} {idx.LastName}
                  </p>
                </li>
                <p className="employee-contact">{idx.Phone}</p>
              </div>
            );
          })}
      </div>
    );
  };

  let list = data.map((idx, index) => (
    <div
      style={{}}
      onClick={() => state.setSelected(idx)}
      className="employee-card"
    >
      <img
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
        }}
        src={idx.imgUrl}
        alt="something random"
      />
      <p
        className="employee-name"
        style={{ color: idx.gender === "male" ? "dodgerblue" : "#FF007F" }}
      >
        {idx.FirstName} {idx.LastName}
      </p>
      <p>{idx.Title}</p>
    </div>
  ));
  return (
    <div className={className}>
      <ul>{list}</ul>
    </div>
  );
};

const EmployeeDetails = ({ className, state }) => {
  const e = state.selected;

  const valuesList = Object.values(e).map(
    (idx) =>
      // <li style={{ listStyle: "none", textAlign: "left" }}>{idx}</li>
      idx
  );

  const attributesList = Object.keys(e).map((idx, index) => (
    // <li style={{ listStyle: "none", textAlign: "left" }}>{`${idx}`}</li>
    <li>{`${idx}: ${valuesList[index]}`}</li>
  ));

  const convertDateToYears = (inputDate, startDate = new Date()) => {
    return (startDate.valueOf() - inputDate.valueOf()) / 3.154e10;
  };

  const EmployeeDetailsContainerStyle = `employee-details-container`;

  return (
    <div
      style={{
        position: "relative",
        left: "50px",
        top: "23px",
        border: "solid 1px black",
        borderBottom: "solid 3px black",
        borderTop: "solid 3px black",
        borderLeft: "solid 3px black",
        borderBottomLeftRadius: "40px 40px",
        borderTopLeftRadius: "62.5px 62.5px",
        width: "1200px",
        height: "1200px",
      }}
      className="employee-details-container"
      // className={EmployeeDetailsContainerStyle}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            width: "7.25rem",
            height: "7.25rem",
            border: "solid 1px black",
            borderRadius: "50%",
            margin: "10px",
          }}
          src={e.imgUrl}
          alt="profile"
        />
        <div>
          <h2
            style={{
              fontWeight: "200",
              marginLeft: "25px",
              marginTop: "45px",
              padding: 0,
              margin: 0,
            }}
          >{`${e.FirstName} ${e.LastName}`}</h2>
          <h3
            style={{
              fontWeight: "300",
              marginLeft: "20px",
              padding: 0,
              margin: 0,
            }}
          >
            {e.Title}
          </h3>
        </div>
      </div>

      <ul>{attributesList}</ul>
      <div
        style={
          {
            // borderTop: "solid 1px black",
          }
        }
      >
        <p
          style={{
            marginLeft: "20px",
          }}
        >
          {e.Phone}
        </p>
        <p style={{ marginLeft: "20px" }}>{e.Email}</p>
        <p style={{ marginLeft: "20px" }}>
          Years of service:
          {convertDateToYears(new Date(e.HireDate)).toFixed()}
        </p>
      </div>
      <div>
        <h2>Employee Details Form</h2>
        <EmployeeDetailsForm />
      </div>
    </div>
  );
};

export { Employees, EmployeeDetails, EmployeeDetailsForm, EmployeesContainer };
