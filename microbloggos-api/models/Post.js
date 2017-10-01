var mongoose   = require('mongoose');
var db         = require('./../config/db');

var postSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

var Post       = mongoose.model('Post', postSchema);

module.exports = Post;