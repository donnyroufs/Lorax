import fs from "fs";

export const loadCommands = async client => {
  fs.readdir("./src/bot/commands", (err, _files) => {
    if (err) console.error(err);
    const files = _files.filter(file => file.split(".").pop() === "js");
    files.forEach(file => {
      const handler = require(`../bot/commands/${file}`);
      const command = file.split(".")[0];
      client.commands.set(command, handler);
    });
  });
};
