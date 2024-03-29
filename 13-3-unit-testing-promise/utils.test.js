const { generateRandomStringProm } = require('./utils');

describe('generateRandomStringProm', () => {
  // Positive scenario
  it('should return a string of the specified length', async () => {
    const length = 5;
    const result = await generateRandomStringProm(length);
    expect(typeof result).toBe('string');
    expect(result).toHaveLength(length);
  });

  // Negative scenario
  it('should throw an error if no length is provided', async () => {
    await expect(generateRandomStringProm()).rejects.toThrow(
      'Length must be a number'
    );
  });

  // Negative scenario
  it('should throw an error if length is less than 1', async () => {
    await expect(generateRandomStringProm(0)).rejects.toThrow(
      'Length must be greater than 0'
    );
  });
});
