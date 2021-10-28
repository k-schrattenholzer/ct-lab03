// const { writeFile, readFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

class SimpleDB {
  constructor(rootDir) {
    const fileName = `${shortid.generate()}.txt`;
    this.newFile = path.join(rootDir, fileName);
  }
}

module.exports = SimpleDB;
