export default (sequelize, DataTypes) => {
  const Question = sequelize.define("Question", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    views: {
      type: DataTypes.INTEGER,
      default: 0
    }
  });
  Question.associate = models => {};

  return Question;
};
