import React from "react";
import "../App.css";

const ChildComponent = ({ object }: any) => {
  return (
    <div
      className={`${object.id % 2 === 0 ? "even" : "odd"}`}
      style={{
        marginTop: object.id % 2 === 0 ? "40px" : "0px",
        marginBottom: object.id % 2 === 0 ? "0px" : "40px",
      }}
    >
      <img src={object.name} alt="random" />
      <h2>{object.description}</h2>
    </div>
  );
};

export default ChildComponent;
