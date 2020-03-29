import "dotenv/config";
import models from "./api/models/index";
import { server, discord } from "./config/index";
import { loadCommands } from "./utils/loaders";
import handleCommands from "./utils/handleCommands";

(async () => {
  await discord.start();
  await server.start();

  // Connects the database and syncs the models.
  models.sequelize.sync().then(() => {
    models.sequelize
      .authenticate()
      .then(() => {
        console.log("Database is up and running...");
      })
      .catch(err => {
        console.error("Unable to connect to the database:", err);
      });
  });
  await loadCommands(discord.client);

  discord.client.on("message", async message => {
    if (message.author.bot) return;
    await handleCommands(discord.client, message);
  });
})();
