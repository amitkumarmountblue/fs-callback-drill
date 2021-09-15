const createDir = require("../problem1");
const fs = require("fs");

const randomString = () => {
  let string = (Math.random() + 1).toString(36).substring(7);
  return "../json files/" + string + ".json";
};

const cb = () => {
  for (let i = 0; i < 10; i++) {
    let title = randomString();
    fs.writeFile(title, "json data", (err) => {
      if (err) throw err;
    });
    fs.unlink(title, (err) => {
      if (err) throw err;
    });
  }
};

createDir(cb);
