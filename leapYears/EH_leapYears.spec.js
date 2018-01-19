var leapYears = require("./leapYears")

describe("Leap Years", function() {
  it('correctly identifies a leap year divisible by 4', function() {
    expect(leapYears(1984)).toEqual(true);
  });

  it('correctly rejects an odd numbered non-leap-year', function() {
    expect(leapYears(1985)).toEqual(false);
  });
});