const Test = require('./Test');
//adding user connection
const Users = require('./Users');
const Item = require('./Item');
const Schedule = require('./Schedule')
const ItemCategory = require('./ItemCategory')
//adding reference(foreign key) User Id to Item
Users.hasMany(Item, {
    foreignKey: 'users_id'
});
Item.belongsTo(Users, {
    foreignKey: 'users_id'
});
Item.hasMany(Schedule, {
    foreignKey: 'users_id'
});
Item.belongsTo(ItemCategory, {
    foreignKey: 'category_id'
});
ItemCategory.hasMany(Item, {
    foreignKey: 'category_id'
});

//adding connection to Users here
module.exports = { Test, Users, Item, ItemCategory };
