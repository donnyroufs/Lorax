import controller from "../controllers/Question.controller";
import showQuestions from "../../utils/showQuestions";

export const run = async ({ message, command, args }) => {
  const { guild } = message;

  const { slug } = await controller.getGuildSlug(guild.id);
  const data = await controller.similiarQuestions(args, guild.id);

  if (data.data[0].length >= 1) {
    showQuestions(slug, data, message, args);
  } else {
    message.channel.send("Looks like this is an unique question!");
  }
};
