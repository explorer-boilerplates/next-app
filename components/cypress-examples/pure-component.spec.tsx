import React from "react";
import { mount } from "cypress-react-unit-test";
import Button from "./pure-component";

describe("Button pure component", () => {
  it("works", () => {
    mount(<Button>Hello</Button>);
    cy.contains("Hello");
  });
});
