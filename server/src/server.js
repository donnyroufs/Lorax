import "dotenv/config";
import models from "./api/models/index";
import { server, discord } from "./config/index";
import { loadCommands } from "./utils/loaders";
import handleCommands from "./utils/handleCommands";
import guildController from "./api/controllers/Guild.controller";

(async () => {
  await server.start();
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "prod") {
    await discord.start(() => {
      discord.client.on("message", async (message) => {
        if (message.author.bot) return;
        await handleCommands(discord.client, message);
      });

      // Handle new Guilds, Deleted Guilds
      discord.client.on("guildCreate", async (event) => {
        // generate avatar url
        const icon = event.iconURL({
          format: "webp",
        });
        await guildController._create(event, icon);
      });

      discord.client.on("guildDelete", async (event) => {
        await guildController._delete(event);
      });

      discord.client.on("guildUpdate", async (event) => {
        // @BUG: The update event is "update" behind??.
        const icon = event.iconURL({
          format: "webp",
        });
        await guildController._update(event, icon);
      });

      console.log(`Registered Bots: ${discord.client.guilds.cache.size}`);
    });
  }

  // Connects the database and syncs the models.
  models.sequelize.sync({ force: false }).then(() => {
    // @NOTE: This belongs somewhere else?
    if (process.env.NODE_ENV === "prod") {
      models.Question.addFullTextIndex();
    }
    models.sequelize
      .authenticate()
      .then(() => {
        console.log("Database is up and running...");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  });

  if (process.env.NODE_ENV === "prod") {
    await loadCommands(discord.client);
  }
})();
