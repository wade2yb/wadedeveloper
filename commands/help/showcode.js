const fs = require("fs");
module.exports = {
  name: "code",
  description: "Tampilkan kode dari perintah yang ditentukan.",
  usage: "<cmd>",
  category: "info",
  args: true,
  execute(message, args) {
    const client = message.client;
    let code;
    try {
      code = fs.readFileSync(`commands/${args[0]}.js`).toString();
    } catch (error) {
      return message.channel.send(
        `I couldn't find a command called \`${args[0]}\``
      );
    }

    try {
      if (args[0]) {
        const options = {
          method: "POST",
          body: code,
          headers: {
            "Content-Type": "application/json",
          },
        };
        message.channel.send(
          `Ini kode untuk ${
            args[0]
          } command:\n\`\`\`js\n${code.substr(0, 1900)}\`\`\``
        );
      }
    } catch (e) {
      return message.channel.send(
        "Terjadi kesalahan saat menampilkan kode perintah."
      );
    }
  },
};
