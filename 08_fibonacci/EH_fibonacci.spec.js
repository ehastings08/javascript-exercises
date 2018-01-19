var fibonacci = require("./fibonacci")

describe("Fibonacci", function() {
  it("returns the fibonacci number for a low number", function() {
    expect(fibonacci(4)).toEqual(3);
  });

  it("returns the fibonacci number for a high number", function() {
    expect(fibonacci(10)).toEqual(55);
  });

  it("doesn't accept negatives", function() {
    expect(fibonacci(-10)).toEqual('ERROR');
  });

  it("does accept strings", function() {
    expect(fibonacci("10")).toEqual(55);
  });

});