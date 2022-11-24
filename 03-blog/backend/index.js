const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost/blog';
const User = require('./models/user');
const Post = require('./models/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/user/login', (req, res) => {
   mongoose.connect(url, { }, 
function(err) {
       if (err) throw err;
       User.find({
           username: req.body.username,
           password: req.body.password
       }, function(err, user) {
           if (err) throw err;
           if (user.length === 1) {
               return res.status(200).json({
                   status: 'success',
                   data: user
               })
           } else {
               return res.status(200).json({
                   status: 'fail',
                   message: 'Login Failed'
               })
           }

       })
   });
});

app.post('/api/post/getAllPost', (req, res) => {
    mongoose.connect(url, { }, function(err) {
        if (err) throw err;
        Post.find({}, [], { sort: { _id: -1 } }, (err, Doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: Doc
            })
        })
    });
});

app.post('/api/post/getPostsByAuthor', (req, res) => {
    mongoose.connect(url, { }, function(err) {
        if (err) throw err;
        Post.find(
         { author_id: req.body.author_id }, 
         [], { sort: { _id: -1 } }, (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
});

app.post('/api/post/createPost', (req, res) => {
    mongoose.connect(url, { }, function(err) {
        if (err) throw err;
        const post = new Post({
            title: req.body.title,
            text: req.body.text,
            author_id: mongoose.Types.ObjectId(req.body.author_id)
        });
        post.save((err, Doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: Doc
            })
        })
    });
});

app.post('/api/post/updatePost', (req, res) => {
    mongoose.connect(url, { }, function(err) {
        if (err) throw err;
        Post.update(
          { _id: req.body.id }, 
          { title: req.body.title, text: req.body.text },
            (err, Doc) => {
                if (err) throw err;
                return res.status(200).json({
                    status: 'success',
                    data: Doc
                })
            })
    });
});

app.post('/api/post/deletePost', (req, res) => {
    mongoose.connect(url, { }, 
 function(err) {
        if (err) throw err;
        Post.findByIdAndRemove(req.body.id,
            (err, Doc) => {
                if (err) throw err;
                return res.status(200).json({
                    status: 'success',
                    data: Doc
                })
            })
    });
}); 

app.listen(3000, () => console.log('Listening on port 3000'));