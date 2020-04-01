function Schema(schemaName = require('../schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
const { attributes } = require("structure");

const ${className} = attributes({
    name: {
        type: String,
        required: true
    }, lastname: {
        type: String
    }
})(class ${className} {
    getCompleteName() {

        return this.name + " " + this.lastname;
    }

});

module.exports = ${className};
    `

}


module.exports = Schema;

