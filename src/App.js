// import "./styles/App.css";
// import "./styles/FormStyle.css";
import { useState } from "react";
// import "./styles/Employees.css";

// import CodeMagazine from "./components/pages/CodeMagazine.page";

// import CSS3Fundamentals from "./components/pages/CSS3Fundamental.component";

// import CodeMagazine from "./components/pages/CodeMagazine.page.jsx";

const TodoList = ({ total }) => {
  let items = total.map((idx, index) => <li>{idx}</li>);

  return <ul>{items}</ul>;
};

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState("");
  const [total, setTotal] = useState([1, 2, 3]);

  // const onFocusHandler = (name) => {
  //   if (isFocused === name) setIsFocused(name);
  // };

  const changeValueHandler = (name) => {
    // return inputValue;
    if (isFocused === name) return inputValue;
    // return "poo";
  };

  const state = { inputValue: inputValue, setInputValue: setInputValue };
  const handler = ({ state }) => {
    console.log(state.inputValue);
    setTotal([inputValue, ...total]);
    state.setInputValue("");
  };

  // const setInputValueWrapper = (name) => {
  //   let query = document.querySelectorAll("input");
  //   NodeList.prototype.toArray = function () {
  //     let buff = [];
  //     for (let i = 0; i < this.length; i++) {
  //       buff.push(this[i]);
  //     }
  //     return buff;
  //   };

  //   let nodes = query.toArray();
  //   let input = nodes.filter((idx) => idx["name"] === "first_name")[0];
  //   input.onchange = () => {
  //     alert(`some change happned to <input name=${name}`);
  //   };
  // };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Todo App
      </h1>
      <input
        placeholder="first_name"
        value={changeValueHandler()}
        name="first_name"
        onFocus={() => setIsFocused("first_name")}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <input
        placeholder="last_name"
        value={changeValueHandler()}
        name="last_name"
        onFocus={() => setIsFocused("last_name")}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handler({ state })}>Todo Handler: </button>
      <button onClick={() => setTotal(["asdf", ...total])}>click me!</button>
      <TodoList total={[...total]} />
    </>
  );
};

const App = () => {
  // prettier-ignore
  return (
    <>
      <Todo />
    </>
  )
};

export default App;
