// expressjs.com a gir ve ora hostname yerini elave et
// burdaki requireler package icindeki adlarda eyni olur adeten
const express = require('express')
// html ucun
const path = require('path')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1/nodeblog',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// static filesler ucun
app.use(express.static('public'))
// public icinde css falan var demekdi

// handlebars ucun:
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
// app.set('views', './views');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




const main = require('./routes/main')
// routesleri ayica elesek onda app.get yix router.get olar
app.use('/',main)
// bu routeri ise salam middlewaredir bunlar vacib deil ama daha yigcamliq ucun edile biler



app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}:${hostname}`)
})


// expressjs.com da static files var orda static seyler ucundu css js kimi ucundu


