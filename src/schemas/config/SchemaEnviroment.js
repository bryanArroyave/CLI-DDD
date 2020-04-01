function Schema(schemaName) {
    return `
module.exports = {
    PORT: process.env.PORT || 3000,
    DB: {
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "pasword",
        database: process.env.DB_DATABASE || "mydatabase_${schemaName}",
        host: process.env.DB_HOST || "localhost",
        dialect: process.env.DB_DIALECT || "postgres"
    }
    };     
`
}


module.exports = Schema;
