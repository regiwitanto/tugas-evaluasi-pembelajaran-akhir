const { generateRandomString } = require('./utils');

describe('generateRandomString', () => {
  // Positive scenario
  it('should return a string of the specified length', (done) => {
    const length = 5;
    generateRandomString(length, (err, result) => {
      expect(err).toBeNull();
      expect(typeof result).toBe('string');
      expect(result).toHaveLength(length);
      done();
    });
  });

  // Negative scenario
  it('should throw an error if no length is provided', (done) => {
    generateRandomString(null, (err, result) => {
      expect(err).toBeInstanceOf(Error);
      expect(result).toBeUndefined();
      done();
    });
  });

  // Negative scenario
  it('should throw an error if length is less than 1', (done) => {
    const length = 0;
    generateRandomString(length, (err, result) => {
      expect(err).toBeInstanceOf(Error);
      expect(result).toBeUndefined();
      done();
    });
  });
});
