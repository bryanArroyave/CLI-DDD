
module.exports = {
    PORT: process.env.PORT || 3000,
    DB: {
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "minimalesco00",
        database: process.env.DB_DATABASE || "catafex_db_dev",
        host: process.env.DB_HOST || "localhost",
        dialect: process.env.DB_DIALECT || "postgres"
    }
    };     
