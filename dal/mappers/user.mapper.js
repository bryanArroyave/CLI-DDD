
module.exports = {

    toDBEntity(user) {
        const { id, name, lastname } = user;

        return { id, name, lastname }; // clase del dominio
    }


} 