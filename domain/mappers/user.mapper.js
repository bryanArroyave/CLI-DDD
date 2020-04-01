
const { User } = require("../");



module.exports = {

    toDomainEntity(user) {
        const { id, name, lastname } = user;

        return new User({ id, name, lastname }); // clase del dominio
    }


}
    
    