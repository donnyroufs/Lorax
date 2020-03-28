import express from "express";
import Discord from "discord.js";

export const discord = {
  client: new Discord.Client(),
  async start() {
    this.client.once("ready", () => {
      console.log("Discord bot is up and running...");
    });
    this.client.login(process.env.DISCORD_TOKEN);
  }
};

export const server = {
  app: express(),
  PORT: process.env.NODE_ENV === "prod" ? 5000 : 5000,
  async start() {
    this.app.listen(this.PORT, () =>
      console.log(`Server running on ${this.PORT}...`)
    );
  }
};
