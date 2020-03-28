import "dotenv/config";
import { discord, server } from "./config/index";
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
})();
