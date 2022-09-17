// web sunucu ders 4
const http = require('http')
const fs = require('fs')
// fs html ucundu
const hostname ='127.0.0.1'
const port = 3000

const indexpage = fs.readFileSync('index.html')
const aboutpage = fs.readFileSync('about.html')
// readfilesync -> icine yazilanin sinxron olaraq istifade et demesidir
// html ucun 2ci hisse yuxarida readfilesync olan 


// const server = http.createServer( (req,res) => {
//     console.log(req.url)
//     res.statusCode = 200
//     // 200 console.de her seyin ok demesi demekdi
//     res.setHeader('Content-Type','text/plain')
//     res.end('Hello nodeJs')
//     // node app2 olduqda server 
//     // alisdirilir ve ekrana bu yazi yazilir bir nov echo kimi
// })



// const server = http.createServer( (req,res) => {
//    if(req.url === '/'){
//     return res.end('home page');
//    }
//    else if(req.url === '/about'){
//     return res.end('about page')
// }
// else{
//     res.statusCode = 404
//     res.end('page is not defined')
// }
// })

// indi html sehifelerinde edirik

const server = http.createServer( (req,res) => {
    if(req.url === '/'){
     return res.end(indexpage);
    }
    else if(req.url === '/about'){
     return res.end(aboutpage)
 }
 else{
     res.statusCode = 404
     res.end('page is not defined')
 }
 })



server.listen(port,hostname, () => {
    console.log(`http://${hostname}:${port}`);
})
// 127.0.0.1:300 urline hello yazilir orda /test olsa yene eyni yazilir


// ders 5 de  index.html e yonlendirilme edildi with url

