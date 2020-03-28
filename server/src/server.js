import "dotenv/config";
import { discord, server } from "./config/index";
import commandHandler from "./handlers/command.handler";

(async () => {
  await server.start();
  await discord.start();

  discord.client.on("message", async message => {
    if (message.author.bot) return;

    // Listens to messages, and deals with them based on given command.
    await commandHandler.listen(message);
  });
})();
