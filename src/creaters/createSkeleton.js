const path = require("path");
const { folders } = require("../structure");
const contents = require("../contents");
const { createFile, createFolder } = require("../fileFunctions")

const createSkeleton = () => {
    folders.map((folder) => {

        const { root, folderName, files } = folder;
        let folderPath = path.join(root || "", folderName || "");
        if (folderPath !== '.')
            createFolder(folderPath)


        files.map((file) => {
            const filePath = path.join(folderPath || "", file.name + file.ext)
            const content = contents[file.ref];

            createFile(filePath, content);
        })
    })
}

module.exports = {
    createSkeleton
}