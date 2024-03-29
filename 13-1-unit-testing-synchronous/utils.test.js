const { generateRandomStringSync } = require('./utils');

describe('generateRandomStringSync', () => {
  // Positive scenario
  it('should return a string of the specified length', () => {
    const length = 5;
    const result = generateRandomStringSync(length);
    expect(typeof result).toBe('string');
    expect(result).toHaveLength(length);
  });

  // Negative scenario
  it('should throw an error if no length is provided', () => {
    expect(() => generateRandomStringSync()).toThrow();
  });

  // Negative scenario: length less than 1
  it('should throw an error if length is less than 1', () => {
    expect(() => generateRandomStringSync(0)).toThrow();
  });
});
