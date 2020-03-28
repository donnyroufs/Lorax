import Discord, { Collection } from "discord.js";

const discordConfig = {
  prefix: "!",
  token: process.env.DISCORD_TOKEN
};

export default {
  client: new Discord.Client(),
  init() {
    this.client.config = discordConfig;
    this.client.commands = new Collection();
  },
  async start() {
    this.init();
    this.client.once("ready", () => {
      console.log("Discord bot is up and running...");
    });
    this.client.login(this.client.config.token);
  }
};
