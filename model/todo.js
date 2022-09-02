const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Todo = sequelize.define("Todo", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});

module.exports = Todo;
