const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban siapa pun dengan satu tembakan tanpa mengenal siapa pun xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Anda tidak memiliki cukup power buat ngeban seseorang`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`Saya tidak memiliki kekuatan untuk ngeban seseorang`)
    
    if(!args[0]) return message.reply(`Tolong sebutkan seseorang untuk di ban!`)
    
    if(!target) return message.reply(`Saya tidak dapat menemukan anggota itu`)
    
    if(target.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.reply(`Mereka memiliki power lebih dari Mu!`)
    }
    
    if(target.id === message.author.id) return message.reply(`I can't ban you as you are the Boss`)
    
    if(target.bannable) {
      let embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Banned \`${target}\` for \`${reason || "Tidak Ada Alasan yang Diberikan"}\``)
      
      message.channel.send(embed)
      
      target.ban()
      
      message.delete()
      
    } else {
      return message.reply(`Saya tidak bisa ngeban mereka, pastikan peran saya di atas peran mereka`)
    }
    return undefined
  }
};
