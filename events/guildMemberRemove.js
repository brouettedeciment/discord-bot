const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "guildMemberRemove",
    once: false,
    async execute(Client, member) {
        console.log(member.displayName + " est partie du serveur de la luxure !")

        var embedLeave = new Discord.MessageEmbed()
            .setTitle("Au-revoir sale noir !")
            .setDescription(`${member} est partie du serveur.`)
            .setColor("RED")
            .setTimestamp()
        Client.channels.cache.get(config.channels["général", "gay-neral"]).send({ embeds: [embedLeave] })
    }
}
