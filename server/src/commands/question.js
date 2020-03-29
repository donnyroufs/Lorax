export const run = ({ message, command, args }) => {
  // console.log(message, command, args);
  // @TODO: Check if question already exists
  // If question exists, ask if user wants to see possible answers
  // else
  message.delete();
  const filter = m => m.author.id === message.author.id;
  message
    .reply(
      "Describe your question as good as possible.. write **exit** to cancel"
    )
    .then(msg =>
      setTimeout(() => {
        msg.delete();
      }, 3000)
    );

  message.channel.awaitMessages(filter, { max: 1 }).then(async collected => {
    const description = collected.first().content;
    if (description === "exit" || description === "return") {
      message.reply("question canceled.");
    } else {
      const authorId = message.author.id;
      const channelName = message.channel.name;
      const guildId = message.guild.id;

      // Create Question With userID

      // Send embed with title, description, and question uri.
      message.reply(description);
    }
  });
  // Wait for answer

  // client.send("your question was: ", message);
  // console.log(command, message);
};
