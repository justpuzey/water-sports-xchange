
/*
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');



//Initiate app server and port
const app = express();
const PORT = process.env.PORT || 3001;

//Make files in 'public' folder accessible
app.use(express.static(path.join(__dirname, 'public')));

//Establish Handlebars as template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(require('./controllers'));

// Test connection to db
sequelize.authenticate().then(() => {
  console.log('connection to database successful...')
})
  .catch(err => {
    console.error('unable to connect to db:', err)
  })


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}...`));
});
*/

//commenting out above because there was an error for connection
//writing new connection below, need to change with handlebars later on
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//connection to db and server
sequelize.sync({ force: false}).then(() =>{
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}...`))
})