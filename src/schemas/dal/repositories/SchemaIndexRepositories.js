function Schema(schemaName = require('../../schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
const config = require("./config")

function getRepository() {
    if (config.REPO === "db") { return "dbRepositories"; }
    else { return "fakeRepositories"; }
}

module.exports = {

    ${className}Repository: require("./" + getRepository() + "/${lower}.repository")
}
`

}


module.exports = Schema;
