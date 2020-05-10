import React, { SyntheticEvent } from "react";
import { mount } from "cypress-react-unit-test";

const Login = (): JSX.Element => (
  <div>
    <div>Login by clicking below</div>
    <a href="/foo">click me</a>
  </div>
);

describe("full navigation", () => {
  it("should not happen", () => {
    mount(<Login />);

    const clicked = cy.stub();
    cy.get("a").invoke("on", "click", (e: SyntheticEvent) => {
      e.preventDefault();
      clicked();
    });
    cy.get("a").click();
    cy.wrap(clicked).should("have.been.calledOnce");
  });
});
