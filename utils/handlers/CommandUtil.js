const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async Client => {
    (await pGlob(`${process.cwd()}/commands/**/*.js`)).map(async cmdFile => {
        const cmd = require(cmdFile);

        if (!cmd.name || !cmd.description) return console.log(`[CMD] - Command not load : no name / description - File : ${cmdFile}`);
        Client.commands.set(cmd.name, cmd);
        console.log(`[CMD] - Command load : ${cmd.name}`)
    })
}