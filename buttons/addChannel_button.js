const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "addChannel_button",
    async runInteraction(Client, interaction) {
        interaction.reply({ content: "channel succefully create", ephemeral: true});
    }
}