const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name : "interactionCreate",
    once : false,
    async execute(Client, interaction) {
        if (interaction.isCommand()) {
            const cmd = Client.commands.get(interaction.commandName);
            if (!cmd) return interaction.reply("this command doesn't exist !");

            cmd.runSlash(Client, interaction);
        }
        else if (interaction.isButton()) {
            const btn = Client.buttons.get(interaction.customId);
            if (!btn) return interaction.reply("this button doesn't exist");

            btn.runInteraction(Client, interaction);
        }
        else if (interaction.isSelectionMenu()) {
            const selectMenu = Client.selects.get(interaction.customId);
            if (!selectMenu) return interaction.reply("this select menu doesn't exist");

            selectMenu.runInteraction(Client, interaction);
        }
    }
}
