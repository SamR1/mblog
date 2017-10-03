var mongoose   = require('mongoose');
var db         = require('./../config/db');
// var User       = require('../models/User');

var postSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    author_id : String,
    author_name: String,
    creationDate: {
        type: Date,
        default: Date.now
    }
});

var Post       = mongoose.model('Post', postSchema);

module.exports = Post;