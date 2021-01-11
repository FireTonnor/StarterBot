const Discord = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv").config();


client.on("ready", async () => {
   console.log("Logged Into " + client.user.username )
})

client.login(process.env.Token)
