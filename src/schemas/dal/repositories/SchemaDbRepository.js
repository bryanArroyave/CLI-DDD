function Schema(schemaName = require('../../schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
class ${className}Repository {
    constructor({ db }) {
        this._db = db.${className}Entity;
    }

    get${className}s() {
        return this._db.findAll();
    }
    create${className}(user) {

        return this._db.create(user);
    }
    get${className}(id) {
        return this._db.findOne(id);
    }
}

module.exports = ${className}Repository;
`

}


module.exports = Schema;
