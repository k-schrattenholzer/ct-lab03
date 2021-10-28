//imports
const { writeFile, readFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

//class and constructor
class SimpleDB {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }
}

//save
    save(object) {
        const uniqueID = shortid.generate()
        const objContent = readFile(object, 'utf8');
        const stringedObj = JSON.stringify(object);
        
        const newFile = writeFile(this.newFile, stringedObj);
        
        return newFile;
    }
//get on ID
//get all as array with promise.all

module.exports = SimpleDB;
