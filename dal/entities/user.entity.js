
const Sequelize = require("sequelize");
const sequelize = require("../../database");


const User = sequelize.define("users", {
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
    tableName: "users",
    timestamps: false
})
module.exports = User;

    