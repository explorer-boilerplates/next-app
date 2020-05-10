import { prop } from "ramda";

describe("Ramda Example", () => {
  it("works", () => {
    const person = {
      name: "Joe",
    };

    expect(prop("name")(person), "ramda").to.equal("Joe");
  });
});
