function Schema(schemaName = require('../../schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
const Sequelize = require("sequelize");
const sequelize = require("../../database");


const ${className} = sequelize.define("${lower}s", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastname: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    tableName: "${lower}s",
    timestamps: false
})
module.exports = ${className};

    `

}


module.exports = Schema;
