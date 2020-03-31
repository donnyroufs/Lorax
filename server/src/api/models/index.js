import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: true,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

const models = {
  Guild: sequelize.import("./Guild.model"),
  User: sequelize.import("./User.model"),
  Question: sequelize.import("./Question.model"),
  Answer: sequelize.import("./Answer.model")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
