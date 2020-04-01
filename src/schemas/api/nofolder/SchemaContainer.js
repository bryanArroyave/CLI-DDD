function SchemaContainer(schemaName = require('../../schemaConfig').schemaName) {

  const lower = schemaName.toLowerCase();
  const className = lower.charAt(0).toUpperCase() + lower.slice(1);

  return `

const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// routes
const Routes = require("../api/routes");
const ${className}Routes = require("../api/routes/${lower}.routes");


// business
const { ${className}Business } = require("../domain/");

// controllers
const { ${className}Controller } = require("../api/controllers");

// services
const { ${className}Service } = require("../services");

// repositories
const { ${className}Repository } = require("../dal/repositories");

// db
const db = require("../dal/models");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    ${className}Controller: asClass(${className}Controller).singleton(),
    ${className}Routes: asFunction(${className}Routes).singleton()
  }) 
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    ${className}Service: asClass(${className}Service).singleton(),

  })
  .register({
   ${className}Repository: asClass(${className}Repository).singleton()
   
  })
  .register({
    ${className}Business: asClass(${className}Business).singleton()
   
  });

module.exports = container;
`

}


module.exports = SchemaContainer;
