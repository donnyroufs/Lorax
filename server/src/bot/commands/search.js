import controller from "../controllers/Question.controller";

export const run = async ({ message, command, args }) => {
  const { guild } = message;

  const { slug } = await controller.getGuildSlug(guild.id);
  const data = await controller.similiarQuestions(args, guild.id);

  let description = ``;

  if (data.data[0].length >= 1) {
    data.data[0].forEach(question => {
      description += `${question.title}\n`;
    });

    const embed = {
      color: 0x0099ff,
      title: `Found ${data.data[0].length} similiar ${
        data.data[0].length > 1 ? "questions" : "question"
      }`,
      fields: data.data[0].map(question => {
        const params = new URLSearchParams(args);
        return {
          name: question.title,
          value: `[posted by ${question.username}](${process.env.BASE_PATH}${slug}/?search=${params})`
        };
      }),
      timestamp: new Date()
    };
    message.channel.send({ embed });
  } else {
    // None found
    message.channel.send("Looks like this is an unique question!");
  }
};
