
const { schemaName } = require('./schemas/schemaConfig')

const folders = [

    {
        root: null,
        folderName: "api",
        files: [
            { name: "container", ref: "container", ext: ".js" },
            { name: "startup", ref: "startup", ext: ".js" },
            { name: "server", ref: "server", ext: ".js" }
        ]
    },
    {
        root: "api",
        folderName: "controllers",
        files: [
            { name: `${schemaName}.controller`, ref: `controller`, ext: ".js" },
            { name: "index.controller", ref: "index.controller", ext: ".js" }
        ]
    },
    {
        root: "api",
        folderName: "dtos",
        files: [
            { name: `${schemaName}.dto`, ref: `dto`, ext: ".js" },
            { name: "index.dto", ref: "index.dto", ext: ".js" }
        ]
    },
    {
        root: "api",
        folderName: "routes",
        files: [
            { name: `${schemaName}.routes`, ref: `routes`, ext: ".js" },
            { name: "index.routes", ref: "index.routes", ext: ".js" }
        ]
    }

    /* ,
    {
         root: null,
         folderName: null,
         files: [
             { name: "database", ref: "database", ext: ".sql" },
             { name: "index", ref: "index", ext: ".js" }
         ]
     }
 */

]


module.exports = { folders }