import React from "react";
import { mount } from "cypress-react-unit-test";
import HelloWorld from "./alert";

describe("Stateless component", () => {
  beforeEach(() => {
    // pass spy and save it under an alias
    // so we can easily get it later with cy.get('@greeting')
    const spy = cy.spy().as("alert");
    cy.on("window:alert", spy);
    mount(<HelloWorld name="Test Aficionado" />);
    cy.log("@greeting");
  });

  it("shows link", () => {
    cy.contains("a", "Say Hi");
  });

  it("alerts with name", () => {
    cy.contains("Say Hi").click();
    cy.get("@alert")
      .should("be.calledWith", "Hi Test Aficionado")
      .and("have.been.be.calledWithExactly", "Hi Test Aficionado");
  });
});
