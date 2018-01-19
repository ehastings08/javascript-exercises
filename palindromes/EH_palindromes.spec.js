var palindromes = require("./palindromes");

describe("Palindromes", function() {
  it('returns true if a single word is a palindrome', function() {
    expect(palindromes('racecar')).toEqual(true);
  });

  it('returns false if a single word is not a palindrome', function() {
    expect(palindromes('tacos')).toEqual(false);
  });
});