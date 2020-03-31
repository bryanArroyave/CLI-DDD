function SchemaIndexController(schemaName = require('../../schemaConfig')) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
module.exports = {
    ${className}Controller : require("./${lower}.Controller")
}
`

}


module.exports = SchemaIndexController;
