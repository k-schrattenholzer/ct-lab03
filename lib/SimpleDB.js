//imports
const { writeFile, readFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

//class and constructor
class SimpleDB {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }

  //assign unique ID & save to rootDir
  save(object) {
    
    object.id = shortid.generate();

    const objectPath = path.join(this.rootDir, `${object.id}.json`);

    return writeFile(objectPath, JSON.stringify(object));
  }

  //get file by id
  get(id) {
    return this.readJSON(`${id}.json`);
  }

  readJSON(fileName) {
    const filePath = path.join(this.rootDir, fileName);
    return new Promise((resolve, reject) => {
      readFile(filePath, 'utf8')
        .then(file => resolve(JSON.parse(file)))
        .catch(err => {
          if(expect.code == 'ENOENT') resolve(null);
          else reject(err);
        });
    });
  }

//new methods above this line  
}


  

//get on ID
//get all as array with promise.all

module.exports = SimpleDB;
