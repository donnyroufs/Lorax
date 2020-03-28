import Sequelize from "sequelize";

export default {
  options: {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  },
  init() {
    this.db = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      this.options
    );
  },
  async connect() {
    this.init();
    return new Promise((resolve, reject) => {
      this.db
        .authenticate()
        .then(err => {
          if (err) throw err;
          return console.log("connected to database...");
        })
        .catch(err => {
          return console.error(err);
        });
    });
  }
};
