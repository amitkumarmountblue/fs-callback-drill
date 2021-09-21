/*     
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously. */

const fs = require("fs");
const lipsumText = "/home/amit-kumar/Desktop/fs callback drill/Data/lipsum.txt";

const fileHandling = (cb) => {
  fs.readFile(lipsumText, "utf-8", (err, data) => {
    if (err) {
      cb(err);
    } else {
      let upperCaseData = data.toUpperCase();
      fs.writeFile("upperCaseData.txt", upperCaseData, (err) => {
        fs.writeFile("filenames.txt", "upperCaseData.txt", (err) => {
          if (err) {
            cb(err);
          }
        });
        if (err) {
          cb(err);
        } else {
          fs.readFile("upperCaseData.txt", "utf-8", (err, data) => {
            if (err) {
              cb(err);
            } else {
              let lowerCaseSentences = data
                .toLowerCase()
                .replace(/\.+/g, ".|")
                .replace(/\?/g, "?|")
                .replace(/\!/g, "!|")
                .split("|")
                .join("\n");

              fs.writeFile(
                "lowerCaseSentences.txt",
                lowerCaseSentences,
                (err) => {
                  fs.appendFile(
                    "filenames.txt",
                    " lowerCaseSentences.txt",
                    (err) => {
                      if (err) {
                        cb(err);
                      }
                    }
                  );
                  if (err) {
                    cb(err);
                  } else {
                    fs.readFile(
                      "lowerCaseSentences.txt",
                      "utf-8",
                      (err, data) => {
                        if (err) {
                          cb(err);
                        } else {
                          let sortData = data.split("\n").sort().join("\n");
                          fs.writeFile("sortData.txt", sortData, (err) => {
                            fs.appendFile(
                              "filenames.txt",
                              " sortData.txt",
                              (err) => {
                                if (err) {
                                  cb(err);
                                }
                              }
                            );
                            if (err) {
                              cb(err);
                            } else {
                              fs.readFile(
                                "filenames.txt",
                                "utf-8",
                                (err, data) => {
                                  if (err) {
                                    cb(err);
                                  } else {
                                    let files = data.split(" ");
                                    files.map((file) => {
                                      fs.unlink(file, (err) => {
                                        if (err) throw err;
                                      });
                                    });
                                  }
                                }
                              );
                            }
                          });
                        }
                      }
                    );
                  }
                }
              );
            }
          });
        }
      });
    }
  });
};

module.exports = fileHandling;
