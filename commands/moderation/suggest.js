const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Kirim Saran Anda",
  category: "moderation",
  run: (client, message, args) => {
    if (!args.length) {
      return message.channel.send("Mohon Berikan Sarannya");
    }

    let channel = message.guild.channels.cache.find(x => x.name === "keluh-kesah" || x.name === "keluh-kesah");

    if (!channel) {
      return message.channel.send("Tidak ada channel dengan nama - keluh-kesah");
    }

    let embed = new MessageEmbed()
      .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setDescription(args.join(" "))
      .setTimestamp();

    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });

    message.channel.send("Mengirim Saran Anda ke " + `${channel}`);
    
    message.delete()
    
  }
};
