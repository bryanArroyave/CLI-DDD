function Schema(schemaName = require('../../schemaConfig').schemaName) {

    const lower = schemaName.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return `
class ${className}Controller {

    constructor({ ${className}Service }) {

        this._${lower}Service = ${className}Service;

    }

    async get${className}(req, res) {

        const { body } = req;

        const ${lower}s = await this._${lower}Service.get${className}(body);
        return res.send({
            err: false,
            payload: ${lower}s
        });
    }


    async create${className}(req, res) {
        const { body } = req;

        try {
            const created${className} = await this._${lower}Service.create${className}(body);
            return res.send({
                err: false,
                payload: created${className}
            });
        } catch (e) {

            console.log(e);
            return res.status(500).json(
                {
                    err: true,
                    payload: null
                }
            )

        }

    }

    async get${className}s(req, res) {


        const ${lower}s = await this._${lower}Service.get${className}s();
        return res.send({
            err: false,
            payload: ${lower}s
        });
    }
    async update${className}(req, res) {
        return res.send({ msg: "actualizar Catador" });
    }

    async delete${className}(req, res) {
        return res.send({ msg: "borrar Catador" });
    }
}

module.exports =${className}Controller;`

}


module.exports = Schema;
