const { MessageEmbed } = require('discord.js')
const ms = require('ms');
module.exports = {
        name: "end",
        description: "Ending giveaway",
        accessableby: "Administrator",
        category: "giveaway",
        aliases: ["giveaway-end"],
        usage: '<giveawaymessageid>',
    run: async (bot, message, args) => {
      if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Anda harus memiliki izin kelola pesan untuk mengumpulkan ulang hadiah.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Anda harus menentukan ID pesan yang valid!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    bot.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    bot.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('Tidak dapat menemukan hadiah untuk `'+ args.join(' ') + '`.');
    }

    // Edit the giveaway
    bot.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('Giveaway akan berakhir kurang dari '+(bot.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway dengan ID pesan ${giveaway.messageID} sudah berakhir.`)){
            message.channel.send('Giveaway ini sudah berakhir!');
        } else {
            console.error(e);
            message.channel.send('An error occured...');
        }
    });
    }
}
