describe('prettifier', function() {

  it('should prettify whole millions', function() {
    expect(PRETTIFIER.prettify(1000000)).toEqual('1M');
    expect(PRETTIFIER.prettify(2000000)).toEqual('2M');
  });

  it('should prettify tens of millions', function() {
    expect(PRETTIFIER.prettify(10000000)).toEqual('10M');
    expect(PRETTIFIER.prettify(25000000)).toEqual('25M');
  });

  it('should prettify hundreds of millions', function() {
    expect(PRETTIFIER.prettify(100000000)).toEqual('100M');
    expect(PRETTIFIER.prettify(250000000)).toEqual('250M');
  });

  it('should prettify whole billions', function() {
    expect(PRETTIFIER.prettify(1000000000)).toEqual('1B');
    expect(PRETTIFIER.prettify(2000000000)).toEqual('2B');
  });

  it('should prettify whole trillions', function() {
    expect(PRETTIFIER.prettify(1000000000000)).toEqual('1T');
    expect(PRETTIFIER.prettify(2000000000000)).toEqual('2T');
  });

  it('should prettify fractional big numbers', function() {
    expect(PRETTIFIER.prettify(1500000)).toEqual('1.5M');
    expect(PRETTIFIER.prettify(2600000000)).toEqual('2.6B');
  });

  it('should prettify non-whole numbers', function() {
    expect(PRETTIFIER.prettify(1500000.1)).toEqual('1.5M');
    expect(PRETTIFIER.prettify(2600000000.23454)).toEqual('2.6B');
  });

});