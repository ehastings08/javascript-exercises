var snakeCase = require("./snakeCase");


describe("Snake Case", function() {
  it("converts a basic two word phrase into snake case", function() {
    expect(snakeCase('Hello, World!')).toEqual("hello_world");
  });

  it("converts a compound camelCase word into snake case", function() {
    expect(snakeCase("snakeCase")).toEqual("snake_case");
  });
});