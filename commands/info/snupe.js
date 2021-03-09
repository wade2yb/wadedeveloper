const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "snipe",
  aliases: ["ms", "messagesnipe"],
  category: "info",
  usage: "(prefix)snipe",
  description: "Dapatkan pesan terakhir yang dihapus dengan pesan Penulis dan Gambar (Jika ada)",
  run:async (client, message, args) => {
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("Tidak ada yang perlu diklik!")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    if(msg.image)embed
    .setImage(msg.image)
    .setColor("00FFFF")
    .setTimestamp();
    
    message.channel.send(embed)
   
    
  }
}
