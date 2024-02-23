const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "ready",
    once: true,
    async execute(Client) {
        console.log("bot ON")

        Client.user.setPresence({ activities: [{ name: "se toucher sur des mineurs", type: "PLAYING"}], status: "online"})




        Client.guilds.cache.get(config["server1","server2"]).commands.set(Client.commands.map(cmd => cmd))
    }
}
