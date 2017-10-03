var Post = require('../models/Post');
var User = require('../models/User');
var mongoose   = require('mongoose');
var ObjectID     = mongoose.Schema.Types.ObjectId;

var postsReadAll = function(req, res){
    Post.find({}, null, { sort: { creationDate: -1} }, function(err, posts) {
        if (err) {
            console.log(err.message);
            res.status(404).send("Error during reading all posts");
        }
        else {
            if (posts === null) {
                res.status(404).send("No posts");
            }
            else {
                res.send(posts);
            }
        }
    });
};

var newPost = function(req, res){
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    }
    else {

        User.findOne({_id: req.payload._id})
            .exec(function(err, user) {
                if (err) {
                    res.status(500).json({message: "Internal error"});
                } else {
                    if (user) {
                        new Post({ message: req.body.message, author_name: user.username, author_id: user._id })
                            .save(function (err, post){                                
                                if (err) {
                                    console.log("ERROR: " + err.message);
                                    res.status(404).json({ message: err.message });
                                }
                                else {
                                    console.log(post);
                                    user.posts.push(post._id);
                                    user.save(function (err) {
                                        if (err) {
                                            console.log("ERROR: " + err.message);
                                            res.status(500).json({ message: err.message });
                                        } else {
                                            res.status(200).json({ message : "Post creation successful" });
                                        }
                                    });
                                }
                            });
                    }
                    else {
                        res.status(404).json({message: "No user with id " + req.params.userid});
                    }
                }
            });

    }
};

var deletePost = function(req, res){
    Post.remove(
        { _id: req.params.id,  author_id: req.payload._id },
        function(err) {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                User.findById({ _id: req.payload._id }, function(err, user) {
                    if (err) {
                        console.log("ERROR: " + err.message);
                        res.status(500).json({ message: err.message });
                    } else {
                        user.posts.pop(req.params.id);
                        user.save(function (err) {
                            if (err) {
                                console.log("ERROR: " + err.message);
                                res.status(500).json({ message: err.message });
                            } else {
                                res.json({ message: 'Delete successful' });
                            }
                        });
                    }
                });
            }
        }
    );
};

exports.postsReadAll   = postsReadAll;
exports.newPost        = newPost;
exports.deletePost     = deletePost;