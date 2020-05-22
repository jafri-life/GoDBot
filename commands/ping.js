module.exports.run = async (bot, message, args) => {
message.channel.send('Pong! `' + Math.floor(Math.round(bot.ping)) + '`ms')

message.undelete();

}
  module.exports.help = {
    name: "ping"
  }