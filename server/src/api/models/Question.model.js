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
  Question.associate = models => {
    Question.belongsTo(models.User);

    Question.hasMany(models.Answer, {
      as: "Answers",
      onDelete: "cascade"
    });
  };

  return Question;
};
