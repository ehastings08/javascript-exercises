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

describe("multiply", function() {
  it("computes the product of two numbers", function() {
    expect(calculator.multiply([3,4])).toEqual(12);
  });

  it("computes the product of multiple numbers", function() {
    expect(calculator.multiply([3,4,5])).toEqual(60);
  });
});

describe("power", function() {
  it("computes the power of two integers", function() {
    expect(calculator.power(2,3)).toEqual(8);
  });

  it("computes the power of fractions", function() {
    expect(calculator.power(8,1/3)).toEqual(2);
  })
});

describe("factorial", function() {
  it("computes the factorial of a number", function() {
    expect(calculator.factorial(4)).toEqual(24);
  });

  it("returns 1 for factorial of 0", function() {
    expect(calculator.factorial(0)).toEqual(1);
  })
});