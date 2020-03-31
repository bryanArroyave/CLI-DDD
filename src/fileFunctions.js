const fs = require("fs");
const chalk = require("chalk");

module.exports = {
    createFile: createFile = (_path, content) => {

        console.log(_path);

        fs.appendFile(_path, '', (e) => {
            if (e) { throw e }
            fs.writeFileSync(_path, content);
        });
        console.log("file  %s created correctly", chalk.blue.bold(_path));
    },
    createFolder: createFolder = (_path) => {
        fs.mkdir(_path, (e) => {
            if (e && e.code !== "EEXIST") {
                throw e;
            }
        })
        console.log("folder %s created correctly", chalk.blue.bold(_path));
    }


}