import "dotenv/config";
import { server, database, discord } from "./config/index";
import { loadCommands } from "./utils/loaders";
import handleCommands from "./utils/handleCommands";

(async () => {
  await server.start();
  await discord.start();

  await loadCommands(discord.client);

  discord.client.on("message", async message => {
    if (message.author.bot) return;
    await handleCommands(discord.client, message);
  });

  await database.connect();
})();
