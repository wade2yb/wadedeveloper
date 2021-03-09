const discord = require("discord.js");

module.exports = {
  name: "idp",
  category:"fun",
  run: async (client, message, args) => {
    
    if(!args[0]) {
      return message.channel.send("Tolong berikan ID ROOM")
                                
    }
    
    let pass = args.slice(1).join(" ")
    
    if(!pass) {
      return message.channel.send("Tolong berikan Kata Sandi ROOM");
    }

  let embed = new discord.MessageEmbed()
  .addField("Room ID", "`" + args[0] + "`")
  .addField("Password", "`" + pass + "`")
  .setColor("RANDOM")
  message.channel.send(embed)

  message.delete()
    
  }
}
