const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
  name: "cat",
  category: "fun",
description: "Mengirim gambar kucing secara acak",
usage: "[command]",
run: async (client, message, args, level) => {
//command
superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Random cat")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`WADE CHAN`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
