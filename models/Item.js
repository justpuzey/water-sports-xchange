//this is the item object the user will list on the profile

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model { }


Item.init({
    //we can perhaps thing of a package to add to make a unique id for each item on the website?
    //would have to be compatible with sequelize
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
    },
    make:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    model:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    year:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    capacity:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    img_url:
    {
        type: DataTypes.STRING, 
        allowNull: false
    },
    category:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    pointval:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //making reference to user
    users_id:
    {
        type: DataTypes.INTEGER,
        references:
        {
            model: 'users',
            key: 'id'
        }
    }
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'item'
    }
);

module.exports = Item;