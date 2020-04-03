const showQuestions = (slug, data, message, args) => {
  console.log(slug, data, message, args);
  let description = ``;

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
};

export default showQuestions;
