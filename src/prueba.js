const UserRoutes = require("../api/routes/user.routes");

const container = createContainer();


container

    .register({
        db: asValue(db)
    })
module.exports = container;               