const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "addrole",
  aliases: ["role", "P!role"],
  category: "moderation",
  description: "Tambahkan peran ke pengguna mana pun",
  run: async (client, message, args) => {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("maaf, Anda memerlukan izin untuk menambahkan role");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Saya tidak memiliki izin untuk menambahkan role");
    } 
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`tolong sebutkan namannya!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`tolong sebutkan peran untuk menambahkan!`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      
      .setColor("RANDOM")
      .setDescription(`changed role for ${target.user.username} added ${arole}`)
      
      await message.channel.send(embed)
      
      target.roles.add(arole)
    
  }
}
