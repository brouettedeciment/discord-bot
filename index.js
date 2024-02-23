const Discord = require("discord.js");
const config = require("./config.json");

const Client = new Discord.Client({ partials: ["CHANNEL"], intents: 98303});

process.on("exit", code => { console.log("process stop with the code "+ code) });
process.on("uncaughtException", (err, origin) => { console.log("Uncaught Exception : " + err, "Origin : " + origin) });
process.on("unhandledRejection", (reason, promise) => { console.log("Unhandled Rejection : " + reason, "promise : " + promise)});
process.on("warning", (...args) => console.log(...args));

["commands", "cooldowns", "buttons", "selects"].forEach(x => Client[x] = new Discord.Collection());
["CommandUtil", "EventUtil", "ButtonUtil", "SelectUtil"].forEach(handler => { require(`./utils/handlers/${handler}`)(Client) });



Client.login(config.token);
