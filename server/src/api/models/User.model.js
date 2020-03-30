export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
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
