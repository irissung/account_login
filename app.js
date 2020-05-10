const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const accountLogin = require('./login')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(session({
  secret: 'keyboard cat',
  cookie: {
    httpOnly: true,
    maxAge: 600000,
  }
}))

app.get('/', (req, res) => {
  const sessionName = req.session.name
  if (req.session.login) {
    res.render('show', { sessionName })
  } else {
    res.render('index')
  }
})

app.post('/login', (req, res) => {
  const login = accountLogin(req.body)
  if (login.includes('重新輸入')) {
    res.render('index', { login })
  } else {
    res.render('show', { login })
    req.session.name = login
    req.session.login = true
  }
})

app.post('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Express is listening on localhost :${port}.`)
})