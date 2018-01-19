var leapYears = require("./leapYears")

describe("Leap Years", function() {
  it('correctly identifies a leap year divisible by 4', function() {
    expect(leapYears(1984)).toEqual(true);
  });
});