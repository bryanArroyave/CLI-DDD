const SchemaRoutes = require("../schemas/api/routes/SchemaRoutes")
const { routesPath } = require("../skeletons/directories")
const { createFile } = require("../fileFunctions")
const path = require("path")
const addToContainer = require("./createTemplate")

const createRoute = (name) => {

    console.log(routesPath);
    
    addToContainer(name, "Routes");
    
    const _path = path.join(routesPath, name.toLowerCase() + ".routes.js");
    createFile(_path, SchemaRoutes(name));
}

module.exports = { createRoute };