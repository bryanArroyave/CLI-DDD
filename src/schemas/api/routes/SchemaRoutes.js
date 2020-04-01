function SchemaContainer(schemaName = require('../../schemaConfig').schemaName) {

  const lower = schemaName.toLowerCase();
  const className = lower.charAt(0).toUpperCase() + lower.slice(1);

  return `

const { Router } = require("express")


module.exports = function ({ ${className}Controller }) {
  const router = Router();

  router
      .get('/', ${className}Controller.get${className}s.bind(${className}Controller))
      .get('/:id', ${className}Controller.get${className}.bind(${className}Controller))
      .post('/', ${className}Controller.create${className}.bind(${className}Controller))
      .put('/:id', ${className}Controller.update${className}.bind(${className}Controller))
      .delete('/:id', ${className}Controller.delete${className}.bind(${className}Controller));

  return router;
}

`

}


module.exports = SchemaContainer;
