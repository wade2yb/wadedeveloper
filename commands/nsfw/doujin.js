const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "doujin",
  aliases: [],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("Channel ini tidak mendukung konten NSFW")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.doujin());
    return message.channel.send(akanekoSan);
      
    }
  }
}
