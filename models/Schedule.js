const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our model
class Schedule extends Model { }

// create fields/columns for model
Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    //making reference to user
    item_id:
    {
      type: DataTypes.INTEGER,
      references:
      {
        model: 'item',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'schedule'
  }
);

module.exports = Schedule;