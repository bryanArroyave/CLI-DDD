module.exports = {


  //API
  "controller": require('./schemas/api/controllers/SchemaController')(),
  "index.controller": require('./schemas/api/controllers/SchemaIndexController')(),

  "dto": require('./schemas/api/dtos/SchemaDto')(),
  "index.dto": require('./schemas/api/dtos/SchemaIndexDto')(),

  "routes": require('./schemas/api/routes/SchemaRoutes')(),
  "index.routes": require('./schemas/api/routes/SchemaIndexRoutes')(),

  "api.mapper": require('./schemas/mappers/SchemaApiMapper')(),
  "dal.mapper": require('./schemas/mappers/SchemaDalMapper')(),
  "domain.mapper": require('./schemas/mappers/SchemaDomainMapper')(),

  "container": require('./schemas/api/nofolder/SchemaContainer')(),
  "startup": require('./schemas/api/nofolder/SchemaStartUp')(),
  "server": require('./schemas/api/nofolder/SchemaServer')(),


  //DAL

  "index.entities": require("./schemas/dal/entities/SchemaIndexEntities")(),
  "entities": require("./schemas/dal/entities/SchemaEntities")(),
  "dal.mapper": require("./schemas/mappers/SchemaDalMapper")(),
  "config.repositories": require("./schemas/dal/repositories/SchemaConfigRepositories")(),
  "index.repositories": require("./schemas/dal/repositories/SchemaIndexRepositories")(),
  "dbRepositories": require("./schemas/dal/repositories/SchemaDbRepository")(),
  "fakeRepositories": require("./schemas/dal/repositories/SchemaFakeRepository")(),

  //DOMAIN

  "index.domain": require("./schemas/domain/SchemaIndexDomain")(),
  "domain.mapper": require("./schemas/mappers/SchemaDomainMapper")(),
  "domain": require("./schemas/domain/SchemaDomain")(),

  //CONFIG

  "index.environments": require("./schemas/config/SchemaIndexEnviroments")(),
  "development": require("./schemas/config/SchemaEnviroment")("dev"),
  "production": require("./schemas/config/SchemaEnviroment")("prod"),
  "qa": require("./schemas/config/SchemaEnviroment")("qa"),

  //SERVICES

  "base.service": require('./schemas/services/SchemaBaseService')(),
  "index.services": require('./schemas/services/SchemaIndexServices')(),
  "service": require('./schemas/services/SchemaService')(),

  //No Folder

  "normal": require('./schemas/nofolder/SchemaNormal')(),
  "index": require('./schemas/nofolder/SchemaIndex')(),
  "database": require('./schemas/nofolder/SchemaDatabase')()

}