const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/',(req,res) => {
    res.render('site/index')
    // burdaki site/index viewsdakidir
})

router.get('/about',(req,res) => {
  res.render('site/about')
})

// posts routes
router.get('/posts/new',(req,res) => {
    res.render('site/addpost')
  })

router.get('/post/:id',(req,res) => {
   Post.findById(req.params.id).lean().then(post => {
    res.render('site/blog_single',{post:post})
   })
})



// post ile create olunar 
router.post('/posts/add',(req,res) =>{
    // res.redirect('/')
    // console.log(req.body)
    // res.redirect('/')
    // burda consolede yazilar yazilanlar demeli request isleyir +
    
    Post.create(req.body)
    res.redirect('/')
}) 
// body parser yuklenmelidir npm install body-parser


router.get('/blog',(req,res) => {
  Post.find({}).lean().then(posts => {
    res.render('site/blog',{posts:posts})
  })
})
// post modelinde her seyi gotur posts kimi et onu site icine posts kimi gonder

//   res.render('site/blog')

router.get('/contact',(req,res) => {
  res.render('site/contact')
})

router.get('/user/login',(req,res) => {
  res.render('user/login')
})

router.get('/user/register',(req,res) => {
  res.render('user/register')
})


// bu halda css lerin yanina / qoy yoxsa css ler geder
// handlebars yukle npmjs.com dan express-handlebars kimi bu html i layout kimi ayirmaga komek edir
// handlebar da mutluq views layout main.handlebars olmalidir

module.exports = router