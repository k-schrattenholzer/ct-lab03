const { mkdir, rm } = require('fs/promises');
const SimpleDB = require('../lib/SimpleDB.js');

describe('SimpleDB', () => {

  const rootDir = './__tests__/store';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => mkdir(rootDir, { recursive: true }));
  });

  it ('creates and saves an object', () => {
    const DB = new SimpleDB(rootDir);
    const object = 'silly lil string';

    return DB
      .save(object)
      .then((object) => expect(object).toEqual(object));
  });
});
