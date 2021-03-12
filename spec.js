const { expect } = require('chai');
const { humainToDog } = require('./index');

describe('Dog age', () => {
  it('should return the correct age', () => {
    const output = humainToDog(1);
    const expected = 31;
    expect(output).to.equal(expected);
  });

  it('should return the correct age', () => {
    const output = humainToDog(3);
    const expected = 49;
    expect(output).to.equal(expected);
  });

  it('should return the correct age', () => {
    const output = humainToDog(7);
    const expected = 62;
    expect(output).to.equal(expected);
  });
});
