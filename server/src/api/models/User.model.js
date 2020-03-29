export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.associate = models => {
    User.belongsToMany(models.Guild, {
      through: "GuildGroups"
    });

    User.hasMany(models.Question, {
      as: "Questions",
      onDelete: "cascade"
    });
  };

  return User;
};
