export const run = async ({ message, command, args }) => {
  message.channel.send(
    "Upcoming features:\n solution: Mark an answer as a solution.\n delete: Remove a question or answer.\n "
  );
};
