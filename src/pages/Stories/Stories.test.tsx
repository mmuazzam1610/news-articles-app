import React from "react";
import { render, screen } from "@testing-library/react";
import Stories from ".";

test("renders learn react link", () => {
  render(<Stories />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
