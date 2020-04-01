
module.exports = {

    toDBEntity(catador) {
        const { id, name, lastname } = catador;

        return { id, name, lastname }; // clase del dominio
    }


} 