const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "eduwork-cruds-v2",
  host: "localhost",
  username: "root",
  password: "root",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database");
  } catch (error) {
    console.error("Unable to connect to database:", error);
  }
})();

module.exports = sequelize;
