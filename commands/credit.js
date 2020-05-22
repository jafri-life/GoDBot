const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
      const embed = new Discord.RichEmbed()
      .setColor(0x00A2E8)
      .addField("Developer", "LiFe")
      .addField("Special thanks too:", `SoapFromYtツ`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send({embed}) 
 }
   module.exports.help = {
        name: "credit"
      }