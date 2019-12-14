import React from "react";
import { render } from "@testing-library/react";
import Logo from "./components/Logo";

test("renders webaddict header", () => {
  const { getByText } = render(<Logo />);
  const linkElement = getByText(/webaddict/i);
  expect(linkElement).toBeInTheDocument();
});
