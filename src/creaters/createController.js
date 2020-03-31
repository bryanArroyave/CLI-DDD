const SchemaController = require("../schemas/api/controllers/SchemaController")
const { controllersPath } = require("../skeletons/directories")
const { createFile } = require("../fileFunctions")
const path = require("path")
const addToContainer = require("./createTemplate")


const createController = (name) => {

    addToContainer(name, "Controller");
    const _path = path.join(controllersPath, name.toLowerCase() + ".controller.js");
    createFile(_path, SchemaController(name));
}

module.exports = { createController };