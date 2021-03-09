module.exports = {
  name: "voicekick",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send(
        "Saya Tidak Memiliki Izin Yang Sesuai Untuk Menggunakan Perintah Ini!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Harap Sebutkan Pengguna Yang Ingin Anda Tendang Dari Channel!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`Pengguna Tidak Ada Dalam Saluran Suara Apa Pun!`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`Pengguna Telah Ditendang Dari Saluran Suara!`)
  }
};
