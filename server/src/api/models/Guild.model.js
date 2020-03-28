export default (sequelize, DataTypes) => {
  const Guild = sequelize.define("Guild", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING
    }
  });

  return Guild;
};
