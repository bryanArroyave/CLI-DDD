
const config = require("./config")

function getRepository() {
    if (config.REPO === "db") { return "dbRepositories"; }
    else { return "fakeRepositories"; }
}

module.exports = {

    UserRepository: require("./" + getRepository() + "/cat.repository")
}
