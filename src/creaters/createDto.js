const SchemaDto = require("../schemas/api/dtos/SchemaDto")
const { dtosPath } = require("../skeletons/directories")
const { createFile } = require("../fileFunctions")
const path = require("path")
const addToContainer = require("./addToContainer")


const createDto = (name) => {


    addToContainer(name, "Dto");
    const _path = path.join(dtosPath, name.toLowerCase() + ".dto.js");
    createFile(_path, SchemaDto(name));
}

module.exports = { createDto };