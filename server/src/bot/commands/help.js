export const run = async ({ message, command, args }) => {
  message.channel.send(
    "Available commands:\n !help\n !question <your question title>\n !answer <@user> <your answer>\n !news\n !search <question>\n"
  );
};
