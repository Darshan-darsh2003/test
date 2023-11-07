import React, { useState } from "react";
import "./App.css";
import ParentComponent from "./ParentComponent";

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
      <div className="container">
        <div
          className="App-header"
          style={{
            padding: "10px",
          }}
        >
          <h2>SIMPLE REACT TEST</h2>
        </div>
        <div style={{ backgroundColor: "#fff", paddingBottom: "20px" }}>
          <p className="App-intro">
            The state is <b style={{ fontSize: "30px" }}>{count}</b>
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
        <ParentComponent />
      </div>
    </div>
  );
}

export default App;
