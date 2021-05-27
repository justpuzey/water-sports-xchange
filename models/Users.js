const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


//made for account creation/login information
class Users extends Model {
  checkPassword(loginAuth){
    return bcrypt.compareSync(loginAuth, this.password);
  }
}

//info for user data 
Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
      //what validations would you like to add for the password?
      //length or special characters? see sequelize validation in docs 
    }
  },
  {
    //password protection here with hash(saltRound bcrypt)
    hooks:
    {
      async beforeCreate(newUserInfo)
      {
        newUserInfo.password = await bcrypt.hash(newUserInfo.password, 15);
        return newUserInfo;
      },
      async beforeUpdate(updatedUserInfo)
      {
        updatedUserInfo.password = await bcrypt.hash(updatedUserInfo.password, 15);
        return updatedUserInfo;
      }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'users'
  }
);


module.exports = Users;