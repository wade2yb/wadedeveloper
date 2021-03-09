const { MessageEmbed } = require("discord.js")
const moment = require('moment')

module.exports = {
name: "kick",
category: "moderation",
description: "Menendang pengguna",
cooldown: 5,
userPerms: ["KICK_MEMBERS"],
clientPerms: ["KICK_MEMBERS"],
run: async(client, message, args) => {  
const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")
          if (!args[0]) return message.channel.send(":x: | **Tentukan seseorang untuk ditendang.**")
        if (!mentionedMember) return message.channel.send(":x: | **Saya tidak dapat menemukan anggota itu.**")
        if (mentionedMember.id === message.author.id) return message.channel.send(":x: | kamu tidak bisa menendang dirimu sendiri.")
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(":x: | **Anda tidak dapat mengeluarkan anggota ini karena role Anda lebih rendah daripada peran anggota tersebut.**")
        }
        if (mentionedMember.kickable) {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
            .setColor(`RANDOM`)
            .setDescription(`
**Member:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
**Reason:** ${reason || "None"}
            `)
        message.channel.send(embed)
        mentionedMember.kick()
        } else {
            return message.channel.send(":x: | **Saya tidak dapat menendang pengguna ini untuk memastikan bahwa peran pengguna lebih rendah dari peran saya.**")
        }
        return undefined
    }
}
