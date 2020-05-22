const { RichEmbed } = require("discord.js");
module.exports.run = async (client, message, args, prefix) => {

 let helpEmbed = new RichEmbed()
    .setTitle("GoD Help Commands")
    .setColor("#fa1f0f")
    .addField("⚒ Moderation Commands"," `answer`, `ban`, `unban`, `kick`, `mute`, `unmute`,  `say`, `warn`, `softban`, `lockdown`, `unlockdown`, `votekick`",true)
    .addField("⚙ Utility Commands","`invite`, `credit`, `today`, `serverroles`, `profi`, `botinfo`,  `ping`, `serverinfo`, `userinfo`, `icon`, `unicode`, `uptime`, `truth`, `wallpaper`, `ide`, `report`, `membercount`",true)
    .addField("😂 Fun Commands", "`dropkick`, `meg`, `rate`, `meme`, `divorce`, `question`, `copypaste`, `spank`,`amiajoke`, `vote`, `timer`, `advice`, `cat`, `help`, `cuddle`, `feed`, `Hammer`, `shi`, `smug`,", true)
    .addField("🔞 NSFW Commands","`fk`, `rejected`, `porn`, `asian`, `desi`, `cum`, `fb`",true)
   .setFooter(`${message.author.tag}`);
  message.channel.send(helpEmbed);
};


exports.help = {
  name: "help"
};
