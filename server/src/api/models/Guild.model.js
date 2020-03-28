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
  Guild.associate = models => {};

  return Guild;
};
