const { containerPath } = require("../skeletons/directories")
const fs = require("fs");
const chalk = require("chalk")


function containerTemplate(name, data, nameTemplate) {

    const lower = name.toLowerCase();
    const newName = lower.charAt(0).toUpperCase() + lower.slice(1);

    const split = data.toString().split("createContainer();");

    return new Promise((resolve, reject) => {
        if (split[0] && split[1]) {
            const newData = `
const ${newName}${nameTemplate} = require("../${newName}");

${split[0]}createContainer();  

container
    .register({
        ${newName}${nameTemplate}: asClass(${newName}${nameTemplate}).singleton()
    })
        ${split[1]} `
            resolve(newData)
        }
        else {
            reject(Error("container no found"))
        }
    })
}


module.exports = addToContainer = (name, nameTemplate) => {

    const path = containerPath;

    let data = fs.readFileSync(path);
    data = data.toString()
    if (data) {
        containerTemplate(name, data, nameTemplate)
            .then((template) => {
                if (template) {
                    fs.writeFileSync(path, template)
                }
            })
            .catch((err) => {
                console.log("%s ", chalk.red.bold(err));
                process.exit(0)
            })
    }
    else
        console.log("%s ", chalk.red.bold("No data found"));
}





