const { RichEmbed } = require("discord.js");
module.exports.run = async (client, message, args, prefix) => {
  if(message.author.id !== "659634151657570314") return message.channel.send("Use /help niggs -_-")  
let helpEmbed = new RichEmbed()
    .setTitle("GoD Owner Help Commands")
    .setColor("#fa1f0f")
    .addField("⚒ Owner Commands"," `reboot`, `reload`, `exec`, `god`, `setgame`, `leave`",true)
    
   .setFooter(`${message.author.tag}`);
  message.channel.send(helpEmbed);
};

module.exports.help = {
  name: "helpowner"
};
