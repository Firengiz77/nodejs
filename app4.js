// expressjs.com a gir ve ora hostname yerini elave et
const express = require('express')
// html ucun
const path = require('path')
const app = express()
const port = 3000
const hostname = '127.0.0.1'


// static filesler ucun
app.use(express.static('public'))

// app.use('/test',(req,res,next) => {
//     console.log('i"m middleware')
//     next()
// })  middlewaredir

// terminala yazilar

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// yalniz / url ucun yon lendirile var demekdi bu hisse

app.get('/',(req,res) => {
    // res.send('Index page')
    res.sendFile(path.resolve(__dirname,'index.html'))
// path require etdikden sonra olur bu hisse

})
// app.get('/users/:id/movies/:movieid',(req,res) => {
//     res.send(`${req.params.id} - ${req.params.movieid}`)
// })

app.get('/about',(req,res) => {
    res.sendFile(path.resolve(__dirname,'about.html'))
})




app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}:${hostname}`)
})


// expressjs.com da static files var orda static pageler ucundu


