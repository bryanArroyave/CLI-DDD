function Schema(schemaName = require('../../schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
module.exports = {

    ${className}Entity: require("./${lower}.entity"),
}

    `

}


module.exports = Schema;
