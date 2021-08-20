const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const route = require('./src/routers/index')
const db = require('./src/app/config/db')


// Connect Database
db.connect();

const app = express()

app.engine('hbs',handlebars({
  extname: '.hbs',
  helpers: {
    index(index){
      return index + 1;
    }
  },
  
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/src/resources/views'));

app.use(express.static(path.join(__dirname, '/src/public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


route(app);

app.listen(process.env.PORT || 3000);

