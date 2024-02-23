const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(Client, member) {
        console.log(member.displayName + " est arrive sur le serveur de la luxure !")

        var embedJoin = new Discord.MessageEmbed()
            .setTitle("Nouveau nigger sur le serveur !")
            .setDescription(`${member} est arrive sur le serveur, bienvenue dans la luxure et n'oublie pas de fermer ta geule, pd.`)
            .setThumbnail(member.displayAvatarURL())
            .setColor("BLUE")
            .setTimestamp()
        Client.channels.cache.get(config.channels["général", "gay-neral"]).send({ embeds: [embedJoin] })

        member.roles.add(config.roles["gros_pd", "ss"], member.displayName)

    }
}
