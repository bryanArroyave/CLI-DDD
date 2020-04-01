function Schema(schemaName = require('../../schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();


    return `
const config = require("./config")

function getRepository() {
    if (config.REPO === "db") { return "dbRepositories"; }
    else { return "fakeRepositories"; }
}

module.exports = {

    UserRepository: require("./" + getRepository() + "/${lower}.repository")
}
`

}


module.exports = Schema;
