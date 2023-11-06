import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>SIMPLE REACT TEST</h2>
      </div>
      <p className="App-intro">
        The state is <b>{count}</b>
      </p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            width: "100px",
            height: "60px",
            outline: "none",
            borderRadius: "10px",
            color: "#000",
          }}
          onClick={handleDecrement}
        >
          Decrement -
        </button>
        <button
          style={{
            width: "100px",
            height: "60px",
            outline: "none",
            borderRadius: "10px",
            color: "#000",
          }}
          onClick={handleIncrement}
        >
          Increment +
        </button>
      </div>
    </div>
  );
}

export default App;
