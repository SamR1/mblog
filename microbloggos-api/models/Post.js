var mongoose   = require('mongoose');
var db         = require('./../config/db');
// var User       = require('../models/User');

var postSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    // for now all user data are saved
    // TODO: check performances
    author: {
        type: []
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

var Post       = mongoose.model('Post', postSchema);

module.exports = Post;