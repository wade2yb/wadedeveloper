const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   category: "moderation",
   description: "Locks a Channel"
}
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("Anda tidak memiliki cukup Izin")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`ðŸ”’ ${message.channel} telah Dikunci!`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
