const express = require('express')
const bodyParser = require('body-parser')
const mysql_query = require('./routes/mysql-query')
const postgresql_query = require('./routes/postgresql-query')
const debug = require('./routes/debug')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.post('/query', function (req, res) {

  if (req.body.vendor === "mysql") {

    mysql_query.execute(req, res);

  } else if (req.body.vendor === "postgresql") {

    postgresql_query.execute(req, res);

  } else {
    res.statusCode = 503;
    res.statusMessage = "unsupport database";
    res.end();
  }

})
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
