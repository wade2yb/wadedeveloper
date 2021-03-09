const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "kpop",
  category: "fun",
  description: "Dapatkan beberapa gambar penyanyi kpop dengan nama",
  run: async (client, message, args) => {
    
    let data = await random.getKpop()
    message.channel.send(data)
    
  }
}
