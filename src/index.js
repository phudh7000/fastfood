const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const route = require('./routers/index')
const db = require('./app/config/db')
const SiteControllers = require('./app/controllers/siteController')
const siteController = require('./app/controllers/siteController')


// Connect Database
db.connect();

const app = express()
const port = 3000





app.engine('hbs',handlebars({
  extname: '.hbs',
  helpers: {
    index(index){
      return index + 1;
    }
  },
  
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
