const minimist = require("minimist");
const { createSkeleton } = require("./creaters/createSkeleton")
const { createController } = require("./creaters/createController")
const { createDto } = require("./creaters/createDto")
const { createRoute } = require("./creaters/createRoute")
const execa = require("execa")
const Listr = require("listr")
const chalk = require("chalk")

const argv = minimist(process.argv.slice(2))
const allDependencies = ["express", "awilix", "cors", "body-parser", "compression"]

const command = argv._.shift()
const name = argv._.shift();

switch (command) {
    case 'create:skeleton':
        const tasks = new Listr([
            {
                title: 'creating skeleton',
                task: () => createSkeleton()
            },
            {
                title: 'installing all dependencies',
                task: () => {
                    const dependencies = allDependencies.toString().split(",").join(" ");
                    return execa(`npm i ${dependencies}`, ["--save"]);
                },
                enabled: () => argv.install
            }
        ]);

        tasks.run()
            .catch((e) => console.log("Error %s ", chalk.red.bold(e)))
            .then((r) => {
                if (argv.install)
                    console.log("Installed dependencies %s ", chalk.greenBright.bold(allDependencies))
                else
                    console.log("You should install theese dependencies %s ", chalk.red.bold(allDependencies))
            })
        break;

    case 'create:controller':



        try {
            createController(name);
        } catch (error) {
            console.log("%s", chalk.red.bold(error))
        }

        break
    case 'create:route':



        try {
            createRoute(name);
        } catch (error) {
            console.log("%s", chalk.red.bold(error))
        }

        break
    case 'create:dto':

        try {
            createDto(name);
        } catch (error) {
            console.log("%s", chalk.red.bold(error))
        }

        break

    case 'create:all':

        const tasks2 = new Listr([
            {
                title: 'creating controller',
                task: () => createController(name)
            },
            {
                title: 'creating route',
                task: () => createRoute(name)
            }
            ,
            {
                title: 'creating dto',
                task: () => createDto(name)
            }
        ]);

        tasks2.run()
            .catch((e) => console.log("Error %s ", chalk.red.bold(e)))
            .then((r) => {

                console.log("Created %s ", chalk.greenBright.bold("Successfully!"))

            })
        break;
        break
    case 'prueba':


        break;
    default:
        console.log(`command %s in not defined`, chalk.red.bold(command));

}
