import Discord from "discord.js";
import controller from "../controllers/Question.controller";
import showQuestions from "../../utils/showQuestions";

export const run = async ({ message, command, args }) => {
  const { author } = message;

  // Check if the user already exists, if he doesnt; create one.
  const avatar = author.avatarURL();
  const user = await controller.findOrCreate(message.author, avatar);

  if (user != null) {
    // @TODO: Check if question already exists
    // const data = await controller.similiarQuestions(args, guild.id);
    // console.log(data);

    const { slug } = await controller.getGuildSlug(message.guild.id);
    const data = await controller.similiarQuestions(args, message.guild.id);

    if (data.data[0].length >= 1) {
      const filter = m => m.author.id === message.author.id;
      message.reply(
        "Looks like we have similiar questions, do you want to see them? y/n"
      );

      message.channel
        .awaitMessages(filter, { max: 1 })
        .then(async collected => {
          if (
            collected.first().content === "y" ||
            collected.first().content === "Y" ||
            collected.first().content === "YES" ||
            collected.first().content === "yes"
          ) {
            showQuestions(slug, data, message, args);
            return;
          } else {
            // Delete asked question
            message.delete();

            const filter = m => m.author.id === message.author.id;
            message
              .reply(
                "Describe your question as good as possible.. write **exit** to cancel"
              )
              .then(msg =>
                setTimeout(() => {
                  msg.delete();
                }, 5000)
              );

            message.channel
              .awaitMessages(filter, { max: 1 })
              .then(async collected => {
                collected.first().delete();
                const description = collected.first().content;
                if (description === "exit") {
                  message.reply("question canceled.");
                } else {
                  // Create Question With userID
                  const question = await controller.createQuestion({
                    title: args,
                    description,
                    channelName: message.channel.name,
                    messageUrl: message.url,
                    UserId: message.author.id,
                    GuildId: message.guild.id,
                    views: 0
                  });

                  // Question is created
                  if (question.ok) {
                    const data = await controller.getGuildSlug(
                      message.guild.id
                    );

                    const params = new URLSearchParams(args);

                    const exampleEmbed = new Discord.MessageEmbed()
                      .setColor("#0099ff")
                      .setTitle(args)
                      .setURL(
                        `${process.env.BASE_PATH}${data.slug}/?search=${params}`
                      )
                      .setAuthor(
                        message.author.username,
                        message.author.avatarURL()
                      )
                      .setDescription(description);

                    message.channel.send(exampleEmbed);
                  } else {
                    message.reply(
                      "Something went wrong... Try asking me again."
                    );
                  }
                  // @TODO: Handle Answers
                }
              });
          }
        });
    } else {
      // Delete asked question
      message.delete();

      const filter = m => m.author.id === message.author.id;
      message
        .reply(
          "Describe your question as good as possible.. write **exit** to cancel"
        )
        .then(msg =>
          setTimeout(() => {
            msg.delete();
          }, 5000)
        );

      message.channel
        .awaitMessages(filter, { max: 1 })
        .then(async collected => {
          collected.first().delete();
          const description = collected.first().content;
          if (description === "exit") {
            message.reply("question canceled.");
          } else {
            // Create Question With userID
            const question = await controller.createQuestion({
              title: args,
              description,
              channelName: message.channel.name,
              messageUrl: message.url,
              UserId: message.author.id,
              GuildId: message.guild.id,
              views: 0
            });

            // Question is created
            if (question.ok) {
              const data = await controller.getGuildSlug(message.guild.id);

              const params = new URLSearchParams(args);

              const exampleEmbed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setTitle(args)
                .setURL(
                  `${process.env.BASE_PATH}${data.slug}/?search=${params}`
                )
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription(description);

              message.channel.send(exampleEmbed);
            } else {
              message.reply("Something went wrong... Try asking me again.");
            }
            // @TODO: Handle Answers
          }
        });
    }
  }
};
