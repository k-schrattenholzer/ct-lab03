const { mkdir, rm } = require('fs/promises');
const SimpleDB = require('../lib/SimpleDB.js');

describe('SimpleDB', () => {

  const rootDir = './__tests__/store';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => mkdir(rootDir, { recursive: true }));
  });

  it ('should create a file in the root directory', () => {
    const db = new SimpleDB(rootDir);
  });
});
