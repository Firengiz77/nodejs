// expressjs.com a gir ve ora hostname yerini elave et
const express = require('express')
// html ucun
const path = require('path')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')

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



app.get('/',(req,res) => {
    res.render('site/index')
    // burdaki site/index viewsdakidir
})
app.get('/about',(req,res) => {
  res.render('site/about')
})

app.get('/blog',(req,res) => {
  res.render('site/blog')
})
app.get('/contact',(req,res) => {
  res.render('site/contact')
})

app.get('/user/login',(req,res) => {
  res.render('user/login')
})
app.get('/user/register',(req,res) => {
  res.render('user/register')
})
// bu halda css lerin yanina / qoy yoxsa css ler geder
// handlebars yukle npmjs.com dan express-handlebars kimi bu html i layout kimi ayirmaga komek edir
// handlebar da mutluq views layout main.handlebars olmalidir





app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}:${hostname}`)
})


// expressjs.com da static files var orda static pageler ucundu


