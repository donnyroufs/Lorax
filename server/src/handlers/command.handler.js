import axios from "axios";
import { discord } from "../config/index";

class CommandHandler {
  constructor({ client, commands }) {
    this.client = client;
    this.commands = commands;
  }

  parseMessage(message) {
    const { content } = message;

    if (content.startsWith(this.client.config.prefix)) {
      const [_command, ...content] = message.content
        .slice(this.client.config.prefix.length)
        .trim()
        .split(/ +/g);
      const command = _command.toLowerCase();

      const channel = message.channel; // id, name,
      const guild = message.guild; // id, name
      const user = message.author; // id, username, avatar, lastMessageChannelID

      return {
        channel,
        guild,
        user,
        command,
        message: content.join(" ")
      };
    }
  }

  isValidAction(message) {
    const { command } = this.parseMessage(message);
    return this.commands.some(cmd => cmd === command);
  }

  async listen(message) {
    const valid = this.isValidAction(message);
    if (!valid) return;

    const data = this.parseMessage(message);
    await this.handleCommand(data);
  }

  async handleCommand({ channel, guild, user, command, message }) {
    switch (command) {
      case "question":
        const data = {
          guildId: guild.id,
          userId: user.id,
          channelId: channel.id,
          channelName: channel.name,
          question: message
        };

        const res = await axios.post(
          `${process.env.BASE_PATH}/api/question`,
          data
        );
        console.log(res.data);
        // Send question to api
        // If there are similiar questions; send embed with all the possible answers.
        //    Ask the user if he still wants to ask the question;
        //      if yes, ask question, and post to database.
        //      else ignore command and remove question on discord chat.
        // else
        //  create question.
        break;

      default:
        return console.error("command invalid...");
    }
  }
}

export default new CommandHandler(discord);
