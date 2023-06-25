import React from "react";
import { render,screen } from "@testing-library/react";

import App from "./App";

test('renders a link which shows to another link', () => {
  render(<App/>);
  const linkEle= screen.getByText('welcome');
  expect(linkEle).toBeInTheDocument();
});
