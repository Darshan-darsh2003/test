import React from "react";
import ChildComponent from "./components/ChildComponent";

const ParentComponent = () => {
  const imageUrls = [
    {
      id: 1,
      name: "https://picsum.photos/id/237/200/300",
      description: "DOG",
    },
    {
      id: 2,
      name: "https://picsum.photos/id/238/200/300",
      description: "BUILDING",
    },
    {
      id: 3,
      name: "https://picsum.photos/id/239/200/300",
      description: "FLOWER",
    },
    {
      id: 4,
      name: "https://picsum.photos/id/240/200/300",
      description: "STAIRS",
    },

    {
      id: 5,
      name: "https://picsum.photos/id/241/200/300",
      description: "MOUNTAIN",
    },
    {
      id: 6,
      name: "https://picsum.photos/id/242/200/300",
      description: "ROAD",
    },
    {
      id: 7,
      name: "https://picsum.photos/id/243/200/300",
      description: "FOREST",
    },
    {
      id: 8,
      name: "https://picsum.photos/id/244/200/300",
      description: "BIRD",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        // overflowX: "scroll",
        flexWrap: "wrap",
      }}
    >
      {imageUrls.map((object) => (
        <ChildComponent key={object.id} object={object} />
      ))}
    </div>
  );
};

export default ParentComponent;
