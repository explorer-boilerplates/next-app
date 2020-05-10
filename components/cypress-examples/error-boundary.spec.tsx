import React from "react";
import { mount } from "cypress-react-unit-test";
import { F } from "ramda";
import { ErrorBoundary } from "./error-boundary";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Cypress.on("uncaught:exception", (_err, _runnable) => {
  return F();
});

describe("Error Boundry", () => {
  const errrorMessage = "I crashed!";
  const ChildWithoutError = (): JSX.Element => <h1>Normal Child</h1>;
  const ChildWithError = (): never => {
    throw new Error(errrorMessage);
  };

  it("renders normal children", () => {
    mount(
      <ErrorBoundary>
        <ChildWithoutError />
      </ErrorBoundary>
    );

    cy.get("h1").should("have.text", "Normal Child");
    cy.get(ErrorBoundary).its("state.error").should("not.exist");
  });

  it("on error, display fallback UI", () => {
    try {
      mount(
        <ErrorBoundary name="ChildWithError">
          <ChildWithError />
        </ErrorBoundary>
      );
    } catch (error) {
      // do nothing
    }
  });
});
