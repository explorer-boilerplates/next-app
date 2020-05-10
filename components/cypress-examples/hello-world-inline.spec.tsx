import React from "react";
import { mount } from "cypress-react-unit-test";

const HelloWorld = (): JSX.Element => <p>Hello World!</p>;
describe("HelloWorld component", () => {
  it("works", () => {
    mount(<HelloWorld />);
    cy.contains("Hello World!");
  });
});
