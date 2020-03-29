export default (sequelize, DataTypes) => {
  const Answer = sequelize.define("Answer", {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Answer.associate = models => {
    Answer.belongsTo(models.User);
  };

  return Answer;
};
