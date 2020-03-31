function Schema() {
  
return `

const { DB } = require("./config/environments");
const Sequelize = require("sequelize")


const config = DB;


const sequelize = new Sequelize(
    config.database,
    config.username,
    config.pasword,
    {
        host: config.host,
        dialect: config.dialect,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)


module.exports = sequelize;  
`

}


module.exports = Schema;
