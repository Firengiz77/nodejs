const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1:27017/node_test',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

Post.create({
    title:'My First Post Title',
    content: 'My First Post Content'
},(error,post) => {
    console.log(error,post)
})
