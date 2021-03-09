module.exports = {
  name: "bug",
category: "info",
run : async(client, message, args) => { 
// again make this fit your command handler style 😀
  if (!args[0]) return message.reply("Harap sebutkan bugnya. Contoh: \ n` / punch tidak berfungsi. Itu tidak menyebutkan pengguna yang saya coba pukul`");   
  if (args[0] === "bug") return message.reply("Harap sebutkan bugnya. Contoh: \ n` / punch tidak berfungsi. Itu tidak menyebutkan pengguna yang saya coba pukul`");   
  args = args.join(" ");   
  message.reply("Terima kasih telah mengirimkan bug!");  
  const content = `\`\`\`**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**\`\`\``;   
  client.channels.cache.get('812592666286096404').send(content)
}
}
