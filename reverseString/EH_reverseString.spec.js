var reverseString = require('./reverseString');

describe('Reverse String', function() {
  it('reverses a regular string', function() {
    expect(reverseString('hello')).toEqual('olleh');
  });
})