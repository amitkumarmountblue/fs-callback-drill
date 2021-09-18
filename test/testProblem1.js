const createDirectory = require("../problem1");
const fs = require("fs");

const randomString = () => {
  let string = (Math.random() + 1).toString(36).substring(7);
  return "../json files/" + string ;
};


createDirectory(randomString());
