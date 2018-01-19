var reverseString = require('./reverseString');

describe('Reverse String', function() {
  it('reverses a regular string', function() {
    expect(reverseString('hello')).toEqual('olleh');
  });

  it('returns nothing when an empty string is entered', function() {
    expect(reverseString('')).toEqual('');
  });

  it('works with multiple words', function() {
    expect(reverseString('I am dog')).toEqual('god ma I');
  });
})