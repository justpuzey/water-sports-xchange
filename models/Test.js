const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our model
class Test extends Model { }

// create fields/columns for model
Test.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'test'
  }
);

module.exports = Test;