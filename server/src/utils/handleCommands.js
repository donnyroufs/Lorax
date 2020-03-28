import messageParser from "./messageParser";

export default async (client, message) => {
  const data = messageParser(message);
  if (!data) return;

  const hndlr = client.commands.get(data.command);
  if (!hndlr) return;

  hndlr.run(data);
};
