const express = require('express');
const path = require('path');
// const session = require('express-session');
// const sequelize = require('./config/connection');

//
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

//Establish Handlebars as template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//
app.use(require('./controllers/'));

//Initialize Server
// sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('Now listening'));
// });