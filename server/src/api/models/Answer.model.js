export default (sequelize, DataTypes) => {
  const Answer = sequelize.define("Answer", {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Answer;
};
