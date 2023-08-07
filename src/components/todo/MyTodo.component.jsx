import { useState } from "react";

const MyTodo = ({ total }) => {
  let items = total.map((idx, index) => <li>{idx}</li>);

  return <ul>{items}</ul>;
};

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputValueBuffer, setIsInputValueBuffer] = useState("");
  const [isFocused, setIsFocused] = useState("");
  const [total, setTotal] = useState([1, 2, 3]);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  // const onFocusHandler = (name) => {
  //   if (isFocused === name) setIsFocused(name);
  // };

  const inputValueHandler = (name) => {
    if (isFocused === name) {
      return inputValue;
    } else {
      return "";
    }
  };
  const changeValueHandler = (e, name) => {
    if (isFocused === name) {
      setInputValue(e.target.value);
      return inputValue;
    }
  };

  const state = { inputValue: inputValue, setInputValue: setInputValue };

  const handler = ({ state }) => {
    if (state.inputValue === "") {
      return;
    } else {
      console.log(state.inputValue);
      setTotal([inputValue, ...total]);
      state.setInputValue("");
    }
  };

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
        value={inputValueHandler("first_name")}
        name="first_name"
        onFocus={() => setIsFocused("first_name")}
        onChange={(e) => changeValueHandler(e, "first_name")}
      />

      <input
        placeholder="last_name"
        value={inputValueHandler("last_name")}
        name="last_name"
        onFocus={() => setIsFocused("last_name")}
        onChange={(e) => changeValueHandler(e, "last_name")}
      />
      <button onClick={() => handler({ state })}>Todo Handler: </button>
      {/* <button onClick={() => setTotal(["asdf", ...total])}>click me!</button> */}
      <MyTodo total={[...total]} />
    </>
  );
};

export default MyTodo;
