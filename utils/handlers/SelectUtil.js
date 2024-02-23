const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async Client => {
    (await pGlob(`${process.cwd()}/selects/**/*.js`)).map(async selectMenuFile => {
        const selectMenu = require(selectMenuFile);

        if (!selectMenu.name) return console.log(`[SELECT] - Select menu not load : no name - File : ${selectMenuFile}`);
        Client.selects.set(selectMenu.name, selectMenu);
        console.log(`[SELECT] - Command load : ${selectMenu.name}`)
    })
}