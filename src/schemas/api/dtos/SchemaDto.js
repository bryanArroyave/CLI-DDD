function Schema(schemaName = require('../../schemaConfig').schemaName) {

  const lower = schemaName.toLowerCase();
  const className = lower.charAt(0).toUpperCase() + lower.slice(1);

  return `
class ${className}Dto {

  schemaName = "";
  lastschemaName = "";
}

module.exports = ${className}Dto;
  `
}
module.exports = Schema;
