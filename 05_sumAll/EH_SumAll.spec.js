var sumAll = require("./sumAll")

describe("Sum All", function() {
  it("sums all positive numbers up to 5", function() {
    expect(sumAll(1,5)).toEqual(15);
  });

  it("returns 0 when the minimum and maximum are both 0", function() {
    expect(sumAll(0,0)).toEqual(0);
  });

  it("validates that min < max", function() {
    expect(sumAll(4,3)).toEqual("Invalid input!");
  });
});