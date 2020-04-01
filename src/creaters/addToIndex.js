const { appendToFile } = require("../fileFunctions")
const { indexController, indexRoute, indexDto } = require("../skeletons/directories")


function addController(name) {
    const content = require("../schemas/api/controllers/SchemaIndexController")(name)
    appendToFile(indexController, content);
}
function addRoute(name) {

    const content = require("../schemas/api/routes/SchemaIndexRoutes")(name)
    appendToFile(indexRoute, content);

}
function addDto(name) {

    const content = require("../schemas/api/dtos/SchemaIndexDto")(name)
    appendToFile(indexDto, content);

}


module.exports = { addController, addRoute, addDto }