import React from "react";
import "../App.css";

const ChildComponent = ({ object }: any) => {
  return (
    <div
      className={`child-component ${object.id % 2 === 0 ? "even" : "odd"}`}
      style={{
        marginTop: object.id % 2 === 0 ? "40px" : "0px",
        marginBottom: object.id % 2 === 0 ? "0px" : "40px",
      }}
    >
      <img src={object.name} alt="random" />
      <p>{object.description}</p>
    </div>
  );
};

export default ChildComponent;
