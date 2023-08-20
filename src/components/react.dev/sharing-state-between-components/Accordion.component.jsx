import { useState } from "react";
import Panel from "./Panel.component";

const cities = [
  {
    city: "London",
    content: "London is the capital of the United Kingdom",
    openDefault: true,
  },
  {
    city: "Paris",
    content: "Paris is the capital of France",
    openDefault: false,
  },
  {
    city: "Japan",
    content: "Okinawa is the capital of Japan",
    openDefault: false,
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [idx, setIdx] = useState(0);

  return (
    <>
      <h1>activeIndex: {activeIndex}</h1>
      <button onClick={() => setActiveIndex(activeIndex - 1)}>decrement</button>
      <button onClick={() => setActiveIndex(activeIndex + 1)}>increment</button>
      <h2>Almaty, Kazakhstan</h2>

      <Panel
        style={cities[0].openDefault ? { color: "red" } : { color: "green" }}
        title={cities[0].city}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        {cities[0].content}
      </Panel>
      <Panel
        style={{ color: "green" }}
        title={cities[1].city}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        {cities[1].content}
      </Panel>
      <Panel
        style={{ color: "green" }}
        title={cities[2].city}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        {cities[2].content}
      </Panel>
    </>
  );
}
