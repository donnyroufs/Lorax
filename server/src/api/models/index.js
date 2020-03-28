import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

const models = {
  guild: sequelize.import("./Guild.model"),
  user: sequelize.import("./User.model"),
  question: sequelize.import("./Question.model"),
  answer: sequelize.import("./Answer.model")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName], associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
