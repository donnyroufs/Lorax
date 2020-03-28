import "dotenv/config";
import Discord from "discord.js";

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Connected to discord bot...");
});

client.login(process.env.DISCORD_TOKEN);

client.on("message", message => {
  console.log(message.content);
});
