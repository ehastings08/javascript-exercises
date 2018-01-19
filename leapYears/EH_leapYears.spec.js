var leapYears = require("./leapYears")

describe("Leap Years", function() {
  it('correctly identifies a leap year divisible by 4', function() {
    expect(leapYears(1984)).toEqual(true);
  });

  it('correctly rejects an odd numbered non-leap-year', function() {
    expect(leapYears(1985)).toEqual(false);
  });

  it('correctly rejects a year divisible by 100 but not 400', function() {
    expect(leapYears(1800)).toEqual(false);
  });

  it('correctly accepts a century year divisible by 4', function() {
    expect(leapYears(2000)).toEqual(true);
  });

});