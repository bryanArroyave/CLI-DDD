
const Sequelize = require("sequelize");
const sequelize = require("../../database");


const Cat = sequelize.define("cats", {
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
    tableName: "cats",
    timestamps: false
})
module.exports = Cat;

    