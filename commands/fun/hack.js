const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hack",
  aliases: [],
  category: "fun",
  description: "Hack Member!",
  usage: "Hack <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Hack!`
      );

    if (Member.user.id === message.author.id)
      return message.channel.send(`**Lo Gabisa ngehek Diri sendiri Gblk!**`);

    let embed = new MessageEmbed()
      .setColor()
      .setTitle(`Hack Status: Completed🤠`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
      .setFooter(`Siap siap akun mu mengenang 🤠!`)
      .setTimestamp();

    await message.channel.send(`Hacking Started! Hacking ${Member.user.username}`);

    await message.channel.send(`Hack Status: 10%`);

    await message.channel.send(`Hack Status: 20%`);

    await message.channel.send(`Hack Status: 30%`);

    await message.channel.send(`Hack Status: 40%`);

    await message.channel.send(`Hack Status: 50%`);

    await message.channel.send(`Hack Status: 60%`);

    await message.channel.send(`Hack Status: 70%`);

    await message.channel.send(`Hack Status: 80%`);

    await message.channel.send(`Hack Status: 90%`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }
};
