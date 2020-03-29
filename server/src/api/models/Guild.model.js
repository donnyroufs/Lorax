export default (sequelize, DataTypes) => {
  const Guild = sequelize.define("Guild", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    avatar: {
      type: DataTypes.STRING
    }
  });
  Guild.associate = models => {
    Guild.belongsToMany(models.User, {
      through: "GuildGroups"
    });

    Guild.hasMany(models.Question, {
      as: "Questions"
    });

    // Guild.belongsToMany(models.User, {
    //   through: "guildGroups"
    // });
    // Guild.belongsToMany(models.Question, {
    //   through: "guildGroups"
    // });
  };

  return Guild;
};
