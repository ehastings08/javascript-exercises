var tempConversion = require('./tempConversion')

describe('ftoc', function() {
  it('converts 32F to 0C', function() {
    expect(tempConversion.ftoc(32)).toEqual(0);
  });

  it('converts 0F to -17.78C', function() {
    expect(+(tempConversion.ftoc(0).toFixed(2))).toEqual(-17.78);
  });

  it('converts -10F to -23.33C', function() {
    expect(+(tempConversion.ftoc(-10).toFixed(2))).toEqual(-23.33);
  });
});