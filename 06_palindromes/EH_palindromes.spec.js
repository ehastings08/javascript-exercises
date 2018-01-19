var palindromes = require("./palindromes");

describe("Palindromes", function() {
  it('returns true if a single word is a palindrome', function() {
    expect(palindromes('racecar')).toEqual(true);
  });

  it('returns false if a single word is not a palindrome', function() {
    expect(palindromes('tacos')).toEqual(false);
  });

  it('returns true for a phrase with no punctuation', function() {
    expect(palindromes('able was i ere i saw elba')).toEqual(true);
  });

  it('returns true for a phrase with capitalization', function() {
    expect(palindromes('Able was I ere I saw Elba')).toEqual(true);
  });

  it('returns true for a phrase with punctuation', function() {
    expect(palindromes('A car, a man, a maraca.')).toEqual(true);
  });
});