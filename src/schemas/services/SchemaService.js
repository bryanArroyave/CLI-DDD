function Schema(schemaName = require('../../schemas/schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
const BaseService = require("./base.service");

class ${className}Service extends BaseService {
  constructor({ ${className}Business }) {
    super(${className}Business);
  }
}

module.exports = ${className}Service;

`

}


module.exports = Schema;
