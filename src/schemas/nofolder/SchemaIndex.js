function Schema(schemaName = require('../../schemas/schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

return `

const container = require("./api/container");

const app = container.resolve("app");
const db = container.resolve("db");

const { ${className}Entity } = db;

app
    .start()
    .then(async () => {

        console.log();
        
        await db.${className}Entity.sequelize.sync();

    })
    .catch(err => {
        console.log(err);
    });
    
`

}


module.exports = Schema;
