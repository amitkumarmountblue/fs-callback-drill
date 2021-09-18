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
