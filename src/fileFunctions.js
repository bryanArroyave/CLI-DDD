const fs = require("fs");
const chalk = require("chalk");

module.exports = {

    readFile: readFile = (_path) => {


        const content = fs.readFileSync(_path, "utf-8");
        return content;

    },
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
    },

    appendToFile: updateFile = (_path, content) => {
        const courrentContent = readFile(_path);
        const newContent = `
 ${content}
 ${courrentContent}
        `
        createFile(_path, newContent)

    }


}