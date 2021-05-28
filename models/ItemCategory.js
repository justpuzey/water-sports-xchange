

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ItemCategory extends Model { }


ItemCategory.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name:
  {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'item_category'
  }
);

module.exports = ItemCategory;