const { Transform } = require('stream');
const { Buffer } = require('buffer');

/**
 * @TODO
 * Buatlah fungsi `createBase64TransformStream` yang mengonversi data yang masuk menjadi base64.
 */
function createBase64TransformStream() {
  return new Transform({
    transform(chunk, encoding, callback) {
      const base64Data = Buffer.from(chunk).toString('base64');
      this.push(base64Data);
      callback();
    },
  });
}
