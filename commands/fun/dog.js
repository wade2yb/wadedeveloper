const superagent = require("snekfetch");
const Discord = require('discord.js')



module.exports = {
  name: "dog",
  category: "fun",
description: "Mengirim gambar anjing secara acak",
usage: "[command]",
run: async (client, message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("DOG")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`DOGE`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
