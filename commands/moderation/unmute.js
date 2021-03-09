const db = require("quick.db");

module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Maaf, tetapi Anda tidak memiliki izin untuk menyuarakan siapa pun"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Saya tidak memiliki izin untuk Manage Roles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Harap sebutkan anggota yang ingin Anda tampilkan lagi");
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send("Mengingat Pengguna tidak memiliki peran bisu jadi apa yang harus saya ambil");
    }

    user.roles.remove(muterole)

    await message.channel.send(`**${message.mentions.users.first().username}** is now unmuted`);

    user.send(`Anda sekarang di unmute dari **${message.guild.name}**`);
    
    message.delete()
  }
};
