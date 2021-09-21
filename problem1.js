/* Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously */

const fs = require("fs").promises;

const createDirectory = (filename) => {
  fs.mkdir("../json files")
    .then(() => {
      for (let i = 0; i < 10; i++) {
        fs.writeFile(filename + i + ".json", "");
      }
    })
    .then(() => {
      for (let i = 0; i < 10; i++) {
        fs.unlink(filename + i + ".json");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = createDirectory;
