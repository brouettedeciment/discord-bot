const Discord = require("discord.js");
const config = require("../config.json");
const db = require("../db.json");
const fs = require("fs");

function Savedb() {
    fs.writeFile(`${process.cwd()}/db.json`, JSON.stringify(db, null, 4), (err) => {
        if (err) { console.log("A Savedb error as occurred \nerror : " + err)}
    })
}

module.exports = {
    name : "hello",
    description : "say hello / good-morning / good-afternoon / good-night to a member of your choices",
    options : [
        {
            name: "target",
            description : "Member you want to tell.",
            type : "USER",
            required : true
        },
        {
            name : "time",
            description : "which formula would you like to use.",
            type : "STRING",
            required : true,
            choices : [
                {
                    name : "hello",
                    value : "hello"
                },
                {
                    name : "good-morning",
                    value : "good-morning"
                },
                {
                    name : "good-afternoon",
                    value : "good-afternoon"
                },
                {
                    name : "good-night",
                    value : "good-night"
                }
            ]
        }
    ],

    runSlash : (Client, interaction) => {

        interaction.reply(`${interaction.user} have say ${interaction.options.getString("time")} to ${interaction.options.getUser("target")} !`)

        db[interaction.user.id] = interaction.user
        Savedb()

    }
}
