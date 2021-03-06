export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING
    }
  });
  User.associate = models => {
    models.User.hasMany(models.Question, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.User.hasMany(models.Answer, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};
