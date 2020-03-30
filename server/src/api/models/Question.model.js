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
    channelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    views: {
      type: DataTypes.INTEGER,
      default: 0
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Question.associate = models => {
    Question.belongsTo(models.Guild, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Question.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Question.hasMany(models.Answer, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Question;
};
