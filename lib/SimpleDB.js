//imports
const { writeFile, readFile, readdir } = require('fs/promises');
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
  //get all as array with promise.all
  getFileArr() {
    return readdir(this.rootDir)
      .then(files => Promise.all(files.map(file => this.readJSON(file))));
  }
//new methods above this line  
}



module.exports = SimpleDB;
