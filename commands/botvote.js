const Discord = require('discord.js');

exports.run =  (client, message, args) => {
  message.delete();
  let embed = new Discord.RichEmbed()
    .setTitle("Vote for GoD!")
    .addField("Voting on discordbots.org:", "https://top.gg/bot/701779940835590194")
    
  message.channel.send({embed});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bv"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'botvote',
    description: 'Vote for the bot on Discordbots.org',
    usage: 'botvote'
  }
  //https://discordbots.org/bot/482128001828651008