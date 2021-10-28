const { mkdir, rm, readdir } = require('fs/promises');
const SimpleDB = require('../lib/SimpleDB.js');

describe('SimpleDB', () => {

  const rootDir = './__tests__/store';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => mkdir(rootDir, { recursive: true }));
  });
  //save test
  it ('creates and saves an object in the root Dir', () => {
    const DB = new SimpleDB(rootDir);
    const object = { message: 'silly lil string', from: 'who knows' };

    const dirContents = readdir(rootDir);

    return DB
      .save(object)
      .then(() => expect(dirContents).toBeTruthy());
  });
});

//save and get test

//null test

//get all test

//delete test

//update test
