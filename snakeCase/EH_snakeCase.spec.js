var snakeCase = require("./snakeCase")

describe("Snake Case", function() {
  it("converts a simple lowercase 2-word compound into snake case", function() {
    expect(snakeCase("hello world")).toEqual("hello_world");
  });

  xit("converts a simple 2-word compound into snake case", function() {
    expect(snakeCase("snakeCase")).toEqual("snake_case");
  });
});