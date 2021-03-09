const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Setel saluran selamat datang!",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Harap Sebutkan channelnya terlebih dahulu")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Saluran Selamat Datang disetel Di ${channel}`)
  }
}
