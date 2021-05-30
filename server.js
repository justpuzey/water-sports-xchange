const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const routes = require('./controllers');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'xtinawuzhere',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

app.use("/css", express.static('public'));

//for handlebars

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//connection to db and server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}...`))
})

 