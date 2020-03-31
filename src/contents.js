module.exports = {


  //API
  "controller": require('./schemas/api/controllers/SchemaController')(),
  "index.controller": require('./schemas/api/controllers/SchemaIndexController')(),

  "dto": require('./schemas/api/dtos/SchemaDto')(),
  "index.dto": require('./schemas/api/dtos/SchemaIndexDto')(),

  "routes": require('./schemas/api/routes/SchemaRoutes')(),
  "index.routes": require('./schemas/api/routes/SchemaIndexRoutes')(), 
  
  "container": require('./schemas/api/nofolder/SchemaContainer')(),
  "startup": require('./schemas/api/nofolder/SchemaStartUp')(),
  "server": require('./schemas/api/nofolder/SchemaServer')(),
  

 

  //No Folder

  "normal": require('./schemas/nofolder/SchemaNormal')(),
  "index": require('./schemas/nofolder/SchemaIndex')(),
  "database": require('./schemas/nofolder/SchemaDatabase')()

}