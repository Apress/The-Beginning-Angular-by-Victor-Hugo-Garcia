const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const postSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    author_id: { type: Schema.Types.ObjectId, ref: 'User' }
}, { collection: 'post' });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;