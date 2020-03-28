import "dotenv/config";
import { discord, server } from "./config/index";

(async () => {
  await server.start();
  await discord.start();
})();
