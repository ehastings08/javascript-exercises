var calculator = require("./calculator.js");

describe("add", function() {
  it("adds two numbers", function() {
    expect(calculator.add(1,2)).toEqual(3);
  });

  it("adds negative numbers", function() {
    expect(calculator.add(-2,-3)).toEqual(-5);
  });
});

describe("subtract", function() {
  it("subtracts two numbers", function() {
    expect(calculator.subtract(1,2)).toEqual(-1);
  });

  it("subtracts negative numbers", function() {
    expect(calculator.subtract(-2,-3)).toEqual(1);
  });
});

describe("sum", function() {
  it("computes the sum of an empty array", function() {
    expect(calculator.sum([])).toEqual(0);
  });

  it("computes the sum of an array with multiple numbers", function() {
    expect(calculator.sum([1,2,3,4])).toEqual(10);
  });
});

