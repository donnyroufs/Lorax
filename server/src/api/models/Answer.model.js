export default (sequelize, DataTypes) => {
  const Answer = sequelize.define("Answer", {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Answer.associate = models => {
    models.Answer.belongsTo(models.Question, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Answer.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Answer;
};
