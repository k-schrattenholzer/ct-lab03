//imports
const { writeFile, readFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

//class and constructor
class SimpleDB {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }

  save(object) {
    //assign unique ID & save to rootDir
    object.id = shortid.generate();

    const objectPath = path.join(this.rootDir, `${object.id}.json`);

    return writeFile(objectPath, JSON.stringify(object));
  }
}

//save
  

//get on ID
//get all as array with promise.all

module.exports = SimpleDB;
