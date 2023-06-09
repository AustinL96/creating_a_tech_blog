require('dotenv').config();
const express = require('express');
const session = require('express-session');
const PORT = process.env.PORT || 3000;
const public_routes = require('./controllers/public_routes');
const private_routes = require('./controllers/private_routes');
const auth_routes = require('./controllers/auth_routes');
const db = require('./config/connection');
const { engine } = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(session({
  //heroku is giving me errors with this
  secret: 'mySecretKey',
  // secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use('/', [public_routes, private_routes, auth_routes]);

db.sync().then(() => {
  app.listen(PORT, () => console.log('Server started on port %s', PORT))
});