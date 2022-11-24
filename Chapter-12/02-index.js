app.post('/api/post/deletePost', (req, res) => {
   mongoose.connect(url, { }, function(err) {
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
