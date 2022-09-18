const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1:27017/node_test',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})


// delete method
// Post.findByIdAndDelete('63274d99c4c7c0b2dc279f69',(error,post)=>{
//   console.log('error',post)
// })

// findby id method
// Post.findById('63274d99c4c7c0b2dc279f69',(error,post) => {
//   console.log(error,post)
// })

// Post.findByIdAndUpdate('63274d99c4c7c0b2dc279f69',{
//   title: 'Edited first post title'
// },(error,post) => {
//   console.log('error',post)
// })



// Show all columns
// Post.find({ },(error,post) => {
//   console.log('error',post)
// })

// find title is .. method
// Post.find({
//   title:'My Second Post Title'
// },(error,post) => {
//   console.log('error',post)
// })



// create method
Post.create({
    title:'My first new Post Title',
    content: 'My first new Post Content'
},(error,post) => {
    console.log(error,post)
})







// bu testjs bir 1 denesin yaratmaq ucun numunedir
