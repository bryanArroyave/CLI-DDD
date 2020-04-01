function Schema(schemaName = require('../../schemas/schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
module.exports = {

    toDBEntity(${lower}) {
        const { id, name, lastname } = ${lower};

        return { id, name, lastname }; // clase del dominio
    }


} `

}


module.exports = Schema;
