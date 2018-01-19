var tempConversion = require('./tempConversion')

describe('ftoc', function() {
  it('converts 32F to 0C', function() {
    expect(tempConversion.ftoc(32)).toEqual(0);
  });
});