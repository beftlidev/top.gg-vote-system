const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const INTENTS = Object.entries(Discord.Intents.FLAGS).filter(([K]) => ![].includes(K)).reduce((t, [, V]) => t | V, 0) 
const client = new Discord.Client({intents: INTENTS  }) 
const db = require("croxydb"); 
const {MessageActionRow, MessageButton } = require("discord.js");
client.commands = new Discord.Collection();
const express = require('express')
const app = express()
const fetch = ("node-fetch");
const fs = require("fs");
const config = require('./config.json')

client.on("ready", () => {
  console.log("Connected to the discord.")
})

//Enter the port you set on your virtual server here. (It happens in Glitch)
app.listen(HERE)

const axios = require("axios")  
 const Topgg = require('@top-gg/sdk') 

//Enter the password you specified on Top.gg here.
 const webhook = new Topgg.Webhook('') 
 app.post('/dblwebhook', webhook.listener(async (vote) => { 
 console.log(`${vote.user} Oy verdi!`)  
 const user = await client.users.fetch(vote.user) 
 let u = await client.users.cache.get(vote.user) 
 axios.get(`https://top.gg/api/bots/BOTID`, { 
     headers: {"Authorization": config.topgg-token} 
   }) 
   .then(function (response) {    
     const embed = new Discord.MessageEmbed() 
 .setColor("#0099ff") 
    .setAuthor(u.username, user.displayAvatarURL({dynamic: true})) 
   .setFooter(`BOTNAME`, client.user.avatarURL() ) 
 .setTitle("Thank you for voting. 😍") 
 .setDescription(`❤️ The voter: <@${vote.user}> (\`${user.username}#${user.discriminator}\`)  
 ⭐ Total votes this month: ${response.data.monthlyPoints} `) 
 const row = new MessageActionRow()  
 .addComponents( 
 new MessageButton()  
 .setStyle("LINK")  
 .setLabel("Vote Link") 
 .setEmoji("") 
 .setURL("https://top.gg/bot/BOTID/vote") 
 )  
 client.channels.cache.get('Write the id of which channel you want it to be sent.').send({embeds: [embed], components: [row]}) 
    }) 
 }))

client.login(config.token)
