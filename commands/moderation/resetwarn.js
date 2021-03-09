const db = require("quick.db");

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns", "rsetwarns"],
  category: "moderation",
  usage: "rwarns <@user>",
  description: "Atur ulang peringatan dari orang yang disebutkan",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "You harus memiliki izin admin untuk menggunakan perintah ini"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Sebutkan orang yang peringatannya ingin Anda setel ulang");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Bot tidak boleh memiliki peringatan!");
    }

    if (message.author.id === user.id) {
      return message.channel.send("Anda tidak diizinkan untuk mengatur ulang peringatan Anda");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} tidak memiliki peringatan apapun`);
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(
      `Semua peringatan Anda disetel ulang oleh ${message.author.username} from ${message.guild.name}`
    );
    await message.channel.send(
      `Reseted all warnings of ${message.mentions.users.first().username}`
    );
  }
};
