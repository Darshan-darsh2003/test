import React from "react";
import { render, screen } from "@testing-library/react";
import ChildComponent from "./ChildComponent";

test("renders learn react link", () => {
  const object = {
    id: 1,
    name: "https://picsum.photos/id/237/200/300",
    description: "DOG",
  };
  render(<ChildComponent object={object} />);

  expect(screen.getByText("DOG")).toBeInTheDocument();
});
