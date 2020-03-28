import express from "express";
import Discord, { Collection } from "discord.js";

const discordConfig = {
  prefix: "!",
  token: process.env.DISCORD_TOKEN
};

export const discord = {
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

export const server = {
  app: express(),
  PORT: process.env.NODE_ENV === "prod" ? 5000 : 5000,
  setup() {
    this.app.use("/", express.json());
  },
  async start() {
    this.app.listen(this.PORT, () =>
      console.log(`Server running on ${this.PORT}...`)
    );

    this.setup();
  }
};
