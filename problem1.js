/*Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously */

const fs = require("fs");

const createDir = (cb) => {
    fs.mkdir('../json files',cb);
};

module.exports=createDir;
