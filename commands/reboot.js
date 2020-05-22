const Discord = require("discord.js")
const fs = require("fs");
exports.run = async (client, message, args) => {
  	if (message.author.id !== "659634151657570314") return message.channel.send("Only owners can use this command");
  try {
      await message.reply('I am just getting ready to be fked up again.');
      fs.readdir("./commands/", (err, files) => {
        const filez = files.length
        if (err) return console.error(err);
        message.channel.send(`Refreshed \`${filez + 11}\` commands successfully!`)
        console.log("Refreshed " + filez + " commands")
        files.forEach(file => {
             delete require.cache[require.resolve(`./${file}`)];
        });
    });
      process.exit(1);
    } catch (e) {
      console.log(e);
    }
}
module.exports.help = {
  name: "reboot"
}
