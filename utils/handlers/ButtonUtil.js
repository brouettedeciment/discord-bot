const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async Client => {
    (await pGlob(`${process.cwd()}/buttons/**/*.js`)).map(async btnFile => {
        const btn = require(btnFile);

        if (!btn.name) return console.log(`[BTN] - Button not load : no name - File : ${btnFile}`);
        Client.buttons.set(btn.name, btn);
        console.log(`[BTN] - Button load : ${btn.name}`)
    })
}