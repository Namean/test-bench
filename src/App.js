import "./styles/App.css";
import "./styles/FormStyle.css";
//import './styles/main.css';
// import { useState, useEffect } from "react";
import TabContainer from "./components/TabContainer.component";

import Accordion from "./react.dev/sharing-state-between-components/Accordion.component";
import { useState, useEffect } from "react";

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
async function Post(url, details) {
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, \*no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: formBody, // body data type must match "Content-Type" header
  });
}

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

const App = () => {
  return (
    <>
      <MyForm />
    </>
  );
};

export default App;
