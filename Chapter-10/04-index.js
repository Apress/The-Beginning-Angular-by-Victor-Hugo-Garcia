app.post('/api/post/createPost', (req, res) => {
    mongoose.connect(url, { }, function(err) {
        if (err) throw err;
        const post = new Post({
            title: req.body.title,
            text: req.body.text,
            author_id: mongoose.Types.ObjectId(req.body.author_id)
        });
        post.save((err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
});