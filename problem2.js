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
