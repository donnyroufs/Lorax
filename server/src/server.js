import "dotenv/config";
import models from "./api/models/index";
import { server, discord } from "./config/index";
import { loadCommands } from "./utils/loaders";
import handleCommands from "./utils/handleCommands";

(async () => {
  await server.start();
  await discord.start();

  // Connects the database and syncs the models.
  models.sequelize.sync();

  await loadCommands(discord.client);

  discord.client.on("message", async message => {
    if (message.author.bot) return;
    await handleCommands(discord.client, message);
  });
})();
