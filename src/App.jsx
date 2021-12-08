import "./App.css";
import React, { useState, useEffect } from "react";

const MAHABA = "Lorem ipsum dolor sit amet, consecte";
const ARR_MAHABA = MAHABA.split("");

const COLOR_LIST = [
  "black",
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "grey",
  "aqua",
  "beige",
  "coral",
  "cyan",
  "crimson",
  "silver",
  "maroon",
  "fuchsia",
  "lime",
  "olive",
  "navy",
  "teal",
  "azure",
  "bisque",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "cornsilk",
  "crimson",
  "darkblue",
  "gold",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
];

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const ColoredMahaba = () => {
  return ARR_MAHABA.map((i, index) => (
    <span key={index} style={{ color: COLOR_LIST[random(0, 35)] }}>
      {i}
    </span>
  ));
};

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((count) => count + 1);
    }, 250);

    return function cleanUp() {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "gold",
        border: "10px solid red",
        padding: "20px",
        margin: "500px 150px",
      }}
    >
      <h1>
        <ColoredMahaba />
      </h1>
    </div>
  );
}
export default App;
