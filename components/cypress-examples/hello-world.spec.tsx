import React from "react";
import { mount } from "cypress-react-unit-test";
import HelloWorld from "@components/cypress-examples/hello-world";

describe("HelloWorld component", () => {
  it("works", () => {
    mount(<HelloWorld />);
    cy.contains("Hello World!");
  });
});
