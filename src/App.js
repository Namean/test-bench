import "./styles/App.css";
import "./styles/FormStyle.css";
//import './styles/main.css';
// import { useState, useEffect } from "react";
import "./styles/Employees.css";
import TabContainer from "./components/TabContainer.component";
// import inc from "./lib/inc";
import Accordion from "./react.dev/sharing-state-between-components/Accordion.component";
import { useState, useEffect } from "react";
import { Post } from "../src/lib/Post";
import employees from "./data/employees";
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

const RadioButtons = () => {
  return (
    <>
      <form>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label htmlFor="javascript">JavaScript</label>
      </form>
    </>
  );
};

const Form = () => {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered ${firstName}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First name:</label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type={"text"}
          id="first_name"
          name="first_name"
        />
        <br />
        <label htmlFor="first_name">First name:</label>
        <input type={"text"} id="first_name" name="first_name" />
        <br />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

// http://172.16.150.190:3001/user

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(` ${Object.keys(inputs)}, \n ${Object.values(inputs)} `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input
        type="submit"
        onClick={(event) => Post("http://172.16.150.190:3001/users", inputs)}
      />
    </form>
  );
}

const Employees = () => {
  const url1 = "https://jsonplaceholder.typicode.com/todos";
  const url2 = "http://172.16.150.190:3001/employees";
  // const [data] = useFetch(url2);
  const data = employees;

  return (
    <div className="container">
      {data &&
        data.map((idx, index) => {
          return (
            <>
              <li key={index} id={idx.EmployeeId}>
                {idx.FirstName} {idx.LastName}
              </li>
              <p>
                {idx.Phone}, {idx.Fax}
              </p>
            </>
          );
        })}
    </div>
  );
};

const Home = () => {
  const url1 = "https://jsonplaceholder.typicode.com/todos";
  const url2 = "http://172.16.150.190:3001/employees";
  const [data] = useFetch(url2);

  return (
    <>
      {data &&
        data.map((idx, index) => {
          return (
            <p key={index} id={idx.EmployeeId}>
              {idx.FirstName} {idx.LastName}
            </p>
          );
        })}
    </>
  );
};

function Counter() {
  const [count, setCount] = useState(1);
  const [calculation, setCalculation] = useState(0);
  const url2 = "http://172.16.150.190:3001/employees";
  // const [data] = useFetch(url2);
  const data = employees;
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <p>Calculation: {calculation}</p>
      <button
        onClick={() =>
          setCount((c) => {
            if (c === 1) {
              return data.length;
            } else {
              return c - 1;
            }
          })
        }
      >
        DECREMENT
      </button>
      <button
        id="inc"
        onClick={() =>
          setCount((c) => {
            if (c === data.length) {
              return 1;
            } else {
              return c + 1;
            }
          })
        }
      >
        INCREMENT
      </button>
      <div>
        {data &&
          data.map((idx, index) => {
            return (
              <>
                <li
                  key={idx.EmployeeId}
                  style={idx.EmployeeId <= count ? {} : { display: "none" }}
                >
                  {idx.FirstName}
                </li>
              </>
            );
          })}
      </div>
    </>
  );
}

const App = () => {
  return <Counter />;
};

export default App;
