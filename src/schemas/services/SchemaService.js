function Schema(schemaName = require('../../schemas/schemaConfig').schemaName) {

  const lower = schemaName.toLowerCase();
  const className = lower.charAt(0).toUpperCase() + lower.slice(1);

  return `
  const { toDomainEntity } = require("../domain/mappers/${lower}.mapper")
  const { toDBEntity } = require("../dal/mappers/${lower}.mapper")
  
  class ${className}Service {
  
      constructor({ ${className}Repository }) {
  
          this.${lower}Repository = ${className}Repository;
      }
      async get${className}s() {
  
          
          const ${lower}s = await this.${lower}Repository.get${className}s();
          return ${lower}s.map(toDomainEntity);
      }
      async create${className}(${lower}) {
  
  
          ${lower} = toDBEntity(${lower});
  
  
          const created${className} = await this.${lower}Repository.create${className}(${lower});
  
  
          return created${className};
      }
      async get${className}(${lower}) {
  
          const { id } = ${lower};
          ${lower} = await this.${lower}Repository.get${className}(id);
  
          return toDomainEntity(${lower});
      }
  }
  
  module.exports = ${className}Service;

`

}


module.exports = Schema;
