import React from "react";
import { mount } from "cypress-react-unit-test";
import { HelloX, HelloState } from "./hello-x";

describe("Hello-x components", () => {
  it("can display prop name", () => {
    mount(<HelloX name="Jared" />);

    cy.contains("Hello Jared!");
  });

  it("can display state name", () => {
    mount(<HelloState />);

    cy.contains("Hello Spider-man");
  });
});
