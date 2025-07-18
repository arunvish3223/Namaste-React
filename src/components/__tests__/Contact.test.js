import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Contact component renders correctly", () => {
  render(<Contact />);
  const heading = screen.getByRole("button");
  expect(heading).toBeInTheDocument();
});
