const Discord = require("discord.js");
const config = require("../config.json");

const addChannel_button = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
            .setCustomId("addChannel_button")
            .setLabel("Create a new channel")
            .setStyle("PRIMARY")
            .setEmoji("🔧")
    )

const addChannel_selectMenu = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId("categories_selectMenu")
                .setPlaceholder("categories")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "negre",
                        description: "negre",
                        value: "negre"
                    }
                ])
        )

var embedAddChannel = new Discord.MessageEmbed()
    .setTitle("**Channel creation tool**")
    .setDescription(`to complete the creation of the channel, select the option you want below.`)
    .setColor("BLUE")
    .setTimestamp()

module.exports = {
    name : "salon",
    description : "add a salon with the name and in the category of your choice",
    options : [
        {
            name: "name",
            description : "how do you want to name your channel",
            type : "STRING",
            required : true
        }
    ],
    
    runSlash : (Client, interaction) => {

        interaction.guild.GuildCategory.forEach(x => {
            addChannel_selectMenu.components[0].addOptions([
                {
                    label: `${x.name}`,
                    description: `${x.name}`,
                    value: `${x.id}`
                }
            ])
        })

        interaction.reply({ embeds: [embedAddChannel], components: [addChannel_selectMenu, addChannel_button] })

    }
}
