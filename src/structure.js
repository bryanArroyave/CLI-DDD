const path = require("path")
const { schemaName } = require('./schemas/schemaConfig')

const folders = [
    ////API

    // {
    //     root: null,
    //     folderName: "api",
    //     files: [
    //         { name: "container", ref: "container", ext: ".js" },
    //         { name: "startup", ref: "startup", ext: ".js" },
    //         { name: "server", ref: "server", ext: ".js" }
    //     ]
    // },
    // {
    //     root: "api",
    //     folderName: "controllers",
    //     files: [
    //         { name: `${schemaName}.controller`, ref: `controller`, ext: ".js" },
    //         { name: "index", ref: "index.controller", ext: ".js" }
    //     ]
    // },
    // {
    //     root: "api",
    //     folderName: "dtos",
    //     files: [
    //         { name: `${schemaName}.dto`, ref: `dto`, ext: ".js" },
    //         { name: "index", ref: "index.dto", ext: ".js" }
    //     ]
    // },
    // {
    //     root: "api",
    //     folderName: "routes",
    //     files: [
    //         { name: `${schemaName}.routes`, ref: `routes`, ext: ".js" },
    //         { name: "index", ref: "index.routes", ext: ".js" }
    //     ]
    // },
    // {
    //     root: "api",
    //     folderName: "mappers",
    //     files: [
    //         { name: `${schemaName}.mapper`, ref: `api.mapper`, ext: ".js" }
    //     ]
    // },

    // ////DOMAIN 

    // {
    //     root: null,
    //     folderName: "domain",
    //     files: [
    //         { name: "index", ref: "index.domain", ext: ".js" },
    //         { name: `${schemaName}.domain`, ref: "domain", ext: ".js" }
    //     ]
    // },
    // {
    //     root: "domain",
    //     folderName: "mappers",
    //     files: [
    //         { name: `${schemaName}.mapper`, ref: `domain`, ext: ".js" }
    //     ]
    // },


    ////DAL
    {
        root: null,
        folderName: "dal",
        files: []
    },
    {
        root: "dal",
        folderName: "entities",
        files: [
            { name: `index`, ref: `index.entities`, ext: ".js" },
            { name: `${schemaName}.entity`, ref: `entities`, ext: ".js" }
        ]
    },


    {
        root: "dal",
        folderName: "mappers",
        files: [
            { name: `${schemaName}.mapper`, ref: `dal.mapper`, ext: ".js" }
        ]
    },
    {
        root: "dal",
        folderName: "repositories",
        files: [
            { name: `config`, ref: `config.repositories`, ext: ".js" },
            { name: `index`, ref: `index.repositories`, ext: ".js" }
        ]
    },

    {
        root: path.join("dal", "repositories"),
        folderName: "dbRepositories",
        files: [
            { name: `${schemaName}.repository`, ref: `dbRepositories`, ext: ".js" }
        ]
    },
    {
        root: path.join("dal", "repositories"),
        folderName: "fakeRepositories",
        files: [
            { name: `${schemaName}.repository`, ref: `fakeRepositories`, ext: ".js" }
        ]
    },


    ////CONFIG ENVIROMENTS

    // {
    //     root: null,
    //     folderName: "config",
    //     files: []
    // },
    // {
    //     root: "config",
    //     folderName: "enviroments",
    //     files: [
    //         { name: "development", ref: "development", ext: ".js" },
    //         { name: "index", ref: "index.enviroments", ext: ".js" },
    //         { name: "production", ref: "production", ext: ".js" },
    //         { name: "qa", ref: "qa", ext: ".js" }
    //     ]
    // },


    ////SERVICES
    // {
    //     root: null,
    //     folderName: "services",
    //     files: [
    //         { name: "base.service", ref: "base.service", ext: ".js" },
    //         { name: "index.services", ref: "index.services", ext: ".js" },
    //         { name: `${schemaName}.service`, ref: `service`, ext: ".js" }
    //     ]
    // }






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