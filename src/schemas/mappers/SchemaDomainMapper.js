function Schema(schemaName = require('../../schemas/schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
const { ${className} } = require("../");



module.exports = {

    toDomainEntity(${lower}) {
        const { id, name, lastname } = ${lower};

        return new ${className}({ id, name, lastname }); // clase del dominio
    }


}
    
    `

}


module.exports = Schema;
