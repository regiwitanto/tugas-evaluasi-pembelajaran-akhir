/**
 * @TODO
 * Buatlah tiga buah buffer sebagai berikut:
 * 1. Bernama `unsafeBuffer` dan buatlah dengan cara unsafe dengan alokasi memori 100000 bytes.
 * 2. Bernama `safeBuffer` dan buatlah dengan cara safe dengan alokasi memori 100000 bytes.
 * 3. Bernama `stringBuffer` dan buatlah dari nilai string "Dicoding".
 */
const unsafeBuffer = Buffer.allocUnsafe(100000);
const safeBuffer = Buffer.alloc(100000);
const stringBuffer = Buffer.from('Dicoding');
