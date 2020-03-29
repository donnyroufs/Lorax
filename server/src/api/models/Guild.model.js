export default (sequelize, DataTypes) => {
  const Guild = sequelize.define("Guild", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    avatar: {
      type: DataTypes.STRING
    },
    memberCount: {
      type: DataTypes.INTEGER
    },
    slug: {
      type: DataTypes.STRING
    }
  });
  Guild.associate = models => {
    Guild.belongsToMany(models.User, {
      through: "GuildGroups",
      onDelete: "cascade"
    });

    Guild.hasMany(models.Question, {
      as: "Questions"
    });
  };

  return Guild;
};
