function Schema() {

return `

const container = require("./api/container");

const app = container.resolve("app");
const db = container.resolve("db");

const { UserEntity } = db;

app
    .start()
    .then(async () => {

        console.log();
        
        await db.UserEntity.sequelize.sync();

    })
    .catch(err => {
        console.log(err);
    });
    
`

}


module.exports = Schema;
