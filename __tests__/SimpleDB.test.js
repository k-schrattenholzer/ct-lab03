const { mkdir, rm, readdir } = require('fs/promises');
const SimpleDB = require('../lib/SimpleDB.js');

describe('SimpleDB', () => {

  const rootDir = './__tests__/store';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => mkdir(rootDir, { recursive: true }));
  });

  //save test
  it ('creates and save, and get an object in the root Dir', () => {

    const DB = new SimpleDB(rootDir);

    const object = { 
      message: 'silly lil string', 
      from: 'who knows' 
    };

    const expected = Object.assign({
      id: expect.any(String)
    }, object);

    return DB
      .save(object)
      .then(() => DB.get(object.id))
      .then(actual => expect(actual).toEqual(expected));
  });
});

//save and get test

//null test

//get all test

//delete test

//update test
