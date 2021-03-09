const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "mute someone",
  catagory: "moderation",
  usage: "mute <@mention> .<reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("maaf, Anda memerlukan izin untuk ngemute seseorang");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Saya tidak memiliki izin untuk ngemute");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("\```tolong sebutkan anggota untuk bisu\```");
    }
    if (user.id === message.author.id) {
      return message.channel.send("Saya tidak dapat menonaktifkan Anda karena Anda adalah penulis pesan");
    }
    let reason = args.slice(1).join("");

    if (!reason) {
      return message.channel.send(" \``` tolong beri beberapa alasan untuk ngemute\``` ");
    }

    const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name === "muted");

    if (!muterole) {
      return message.channel.send("\```tolong buat nama role dengan @🌾 Berbunga   \``` ");
    }
    
    await user.roles.remove(vrole);
    await user.roles.add(muterole);

    await message.channel.send(
      `Kamu muted ${message.mentions.users.first().username} for ${reason}`
    );

    user.send(`Kamu di mute ${message.guild} for ${reason}`
    );
  }
};
