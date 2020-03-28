import { discord } from "../config/index";

const { client } = discord;

export default message => {
  const { content } = message;

  if (content.startsWith(client.config.prefix)) {
    const [_command, ...content] = message.content
      .slice(client.config.prefix.length)
      .trim()
      .split(/ +/g);

    const command = _command.toLowerCase();

    return {
      client,
      command,
      message: content.join(" ")
    };
  }
};
