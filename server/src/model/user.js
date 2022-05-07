const {sequelize} = require("./index");
const Sequelize = require('sequelize');

  const User = sequelize.define("user", {
    firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
  });

module.exports = User