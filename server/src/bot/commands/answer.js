import controller from "../controllers/Answer.controller";

// add groupp to user, prefix name with id?
export const run = async ({ message, command, args }) => {
  const [userId, answer] = controller.parseAnswer(args);
  controller.findOrCreate(message.author, message.author.avatarURL());

  const questionAuthor = await controller.fetchUser(userId);
  const questionId = questionAuthor.data.Questions[0].id;
  const messageUrl = message.url;
  const description = answer;

  const created = await controller.createAnser({
    QuestionId: questionId,
    UserId: userId,
    messageUrl,
    description
  });

  if (created.ok) {
    message.reply(
      `You have answered ${questionAuthor.data.username}'s question!`
    );
  } else {
    message.reply(`Something went wrong... Your answer is not saved.`);
  }

  // @TODO: Mark answer as solution
};
