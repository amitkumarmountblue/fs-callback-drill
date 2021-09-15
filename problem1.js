const fs = require("fs");

const createDir = (cb) => {
    fs.mkdir('../json files',cb);
};

module.exports=createDir;
