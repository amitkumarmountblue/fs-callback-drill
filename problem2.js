/*     
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously. */

const fs = require("fs").promises;
const lipsumText = "/home/amit-kumar/Desktop/fs callback drill/Data/lipsum.txt";

const fileHandling = () => {
  fs.readFile(lipsumText)
    .then((data) => {
      let upperCaseData = data.toString().toUpperCase();
      return upperCaseData;
    })
    .then((upperCaseData) => {
      let file1 = "upperCaseData.txt";
      fs.writeFile(file1, upperCaseData);
      return file1;
    })
    .then((file1) => {
      fs.appendFile("filenames.txt", file1 + " ");
      return file1;
    })
    .then((file1) => {
      return fs.readFile(file1);
    })
    .then((data) => {
      const lowerCaseData = data
        .toString()
        .toLowerCase()
        .split(". ")
        .join("\n");
      return lowerCaseData;
    })
    .then((lowerCaseData) => {
      const file2 = "lowerCaseData.txt";
      fs.writeFile(file2, lowerCaseData);
      return file2;
    })
    .then((file2) => {
      fs.appendFile("filenames.txt", file2 + " ");
      return file2;
    })
    .then((file2) => {
      return fs.readFile(file2);
    })
    .then((data) => {
      const sortedData = data.toString().split("\n").sort().join("\n");
      return sortedData;
    })
    .then((sortedData) => {
      const file3 = "sortedData.txt";
      fs.writeFile(file3, sortedData);
      return file3;
    })
    .then((file3) => {
      fs.appendFile("filenames.txt", file3);
      return "filenames.txt";
    })
    .then((data) => {
      return fs.readFile(data);
    })
    .then((data) => {
      let files = data.toString().split(" ");
      files.map((file) => {
        fs.unlink(file);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = fileHandling;
