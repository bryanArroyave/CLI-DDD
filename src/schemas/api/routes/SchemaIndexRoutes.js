function SchemaIndexRoutes(schemaName = require('../../schemaConfig').schemaName) {

  const lower = schemaName.toLowerCase();
  const className = lower.charAt(0).toUpperCase() + lower.slice(1);

  return `

const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function({ ${className}Routes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  apiRoute.use("/${lower}", ${className}Routes);

  router.use("/api", apiRoute);

  return router;
};

`

}


module.exports = SchemaIndexRoutes;
