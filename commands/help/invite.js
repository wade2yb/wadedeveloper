const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`743830477818953768>[CLICK HERE](https://discord.com/oauth2/authorize?client_id=818215899987181650&scope=bot&permissions=1547173503) OR [support server ](https://discord.gg/Enyvu8dv38)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY Unio77#8580`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}
