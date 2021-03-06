const { mkdir, rm } = require('fs/promises');
const SimpleDB = require('../lib/SimpleDB.js');

describe('SimpleDB', () => {

  const rootDir = './__tests__/store';

  //   const clearDir = () => {
  //     return rm(rootDir, { force: true, recursive: true }).then(() => mkdir(rootDir, { recursive: true }));
  //   };
  //   beforeEach(clearDir);
  //   afterEach(clearDir);

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => mkdir(rootDir, { recursive: true }));
  });

  //save test
  it ('creates, saves and gets an object in the root Dir', () => {

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

  //gets all test
  it ('gets all saved objects', () => {
    const newDB = new SimpleDB(rootDir);

    const object1 = { 
      boogers: 'you should eat them', 
      ohSoManyBoogers: 'what a big truck!' 
    };

    const object2 = { 
      boogers: 'my turtle can be opinionated', 
      ohSoManyBoogers: 'he wanted very badly to survive' 
    };

    return newDB
      .save(object1)
      .then(() => newDB.save(object2))
      .then(() => newDB.getFileArr())
      .then(actual => expect(actual).toEqual(expect.arrayContaining([object1, object2])));

  });
  
  //null test
  //   it ('should return null when receiving an empty object')

  //new tests above this line  
});

