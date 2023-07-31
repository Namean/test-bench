import { useState } from "react";

const Home = ({ CountPayload }) => {
  return (
    <>
      <h1>Home</h1>
      <a href="http://localhost:3000/About">About</a>
      <Button CountPayload={CountPayload} />
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>About</h1>
      <a href="http://localhost:3000/Home">Home</a>
    </>
  );
};

const Button = ({ CountPayload }) => {
  const handler = () => {
    setTimeout(() => {
      CountPayload.setCount(CountPayload.state + 1);
    }, 3000);
  };
  return (
    <>
      <button onClick={() => handler()}>Click me</button>
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const urlTwo = "http://localhost:3000/About";
  let href = window.location.href;
  let CountPayload = { count: count, setCount: setCount };
  if (count === 0) {
    return <Home CountPayload={CountPayload} />;
  } else {
    return <About />;
  }
};
