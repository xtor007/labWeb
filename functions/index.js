const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./mail')

const ev = express()

const PORT = 3001

ev.use(bodyParser.urlencoded({ extended: false }))

ev.use('/galaxy.html', express.static(__dirname + '/../public/galaxy.html'))
ev.use('/index.html', express.static(__dirname + '/../public/index.html'))
ev.use('/hyperbola.html', express.static(__dirname + '/../public/hyperbola.html'))
ev.use('/parabola.html', express.static(__dirname + '/../public/parabola.html'))
ev.use('/apparatus.html', express.static(__dirname + '/../public/apparatus.html'))
ev.use('/loading3.gif', express.static(__dirname + '/../public/loading3.gif'))
ev.use('/img.jpg', express.static(__dirname + '/../public/img.jpg'))
ev.use('/main.css', express.static(__dirname + '/../public/main.css'))


ev.post('/form',(req,res) => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(req.body.email)) {
    res.send('error email')
  } else if (req.body.name === '') {
    res.send('error name')
  } else {
    const message = {
      from: '<a.khramchenko.ip01@gmail.com>',
      to: 'tolxpams@gmail.com',
      subject: 'escape velocity',
      text: `name: ${req.body.name}\nemail: ${req.body.email}`
    }
    mailer(message)
    res.redirect('/form')
  }
})

ev.get('/form',(req,res) => {
  const path = require("path")
  res.sendFile(path.resolve('public/index.html'))
})

ev.get('/main.css', function(req, res) {
  res.sendFile(__dirname + '../public/main.css')
})

ev.listen(PORT, () => console.log(`http://localhost:${PORT}/form`))
//ev.listen
