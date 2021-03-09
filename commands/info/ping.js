const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Mengembalikan latensi dan ping API",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(`Pong - ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.username}`)
    
    message.channel.send(embed)
  }
}
