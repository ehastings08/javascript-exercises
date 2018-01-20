var removeFromArray = require("./removeFromArray");

describe("Remove From Array", function() {
  it("removes a single element from an array", function() {
    expect(removeFromArray([1,2,3,4], 3)).toEqual([1,2,4]);
  });

  it("removes multiple values", function() {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });

  it("ignores values not in the array", function() {
    expect(removeFromArray([1,2,3,4], "hi")).toEqual([1,2,3,4]);
  });

  it("can remove all values in array", function() {
    expect(removeFromArray([1,2,3,4], 1,2,3,4)).toEqual([]);
  });

  it("works with mixed data types", function() {
    expect(removeFromArray([1,"hi"],"hi")).toEqual([1]);
  });

});