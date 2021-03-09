const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;

module.exports = {
  name: "math",
  category: "fun",
  run: async (client, message, args) => {
    try {
      if (!args[0]) return message.channel.send("Tolong Beri Aku Persamaan!");

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Result`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Tolong Beri Saya Persamaan yang Valid | Coba lagi nanti!`).then(() => console.log(error));
    }
  }
};
