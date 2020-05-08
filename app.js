const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const accountLogin = require('./login')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const login = accountLogin(req.body)
  console.log('req.body', login)
  if (login.includes('錯誤')) {
    res.render('index', { login })
  } else {
    res.render('show', { login })
  }
})

app.listen(port, () => {
  console.log(`Express is listening on localhost :${port}.`)
})