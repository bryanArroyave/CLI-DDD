function Schema(schemaName = require('../../schemas/schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
const { Catador } = require("../");



module.exports = {

    toDomainEntity(catador) {
        const { id, name, lastname } = catador;

        return new Catador({ id, name, lastname }); // clase del dominio
    }


}
    
    `

}


module.exports = Schema;
