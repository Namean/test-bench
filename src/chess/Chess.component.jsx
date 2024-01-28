import React from "react";
import "./style.css";

function handleClick() {
  alert("You clicked a tile!");
}

const Tile = ({ text }) => {
  return (
    <div class="tile">
      <p
        className="tile-text"
        style={{
          height: "30px",
          width: "20px",
          border: "solid 1px black",
          display: "inline-block",
          position: "relative",
          padding: "20px",
          top: "30px",
          left: "10px",
          right: "30px",
        }}
      >
        {text}
      </p>
    </div>
  );
};

let rank = ["a", "b", "c", "d", "e", "f", "g", "h"];

const TileList = () => {
  let tileList = rank.map((idx, index) => (
    <Tile text={rank[index]} onClick={handleClick()} />
  ));

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>{tileList}</div>
  );
};

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <TileList />
    </div>
  );
}
