var Post = require('../models/Post');

var postsReadAll = function(req, res){
    Post.find({}, function(err, posts) {
        if (err) {
            console.log(err.message);
            res.status(404).send("Error during reading all posts");
        }
        else {
            if (users === null) {
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
        new Post({ message: req.body.message, author: req.payload._id })
            .save(function (err, post){
                if (err) {
                    console.log("ERROR: " + err.message);
                    res.status(404).json({ message: err.message });
                }
                else {
                    console.log("Registration OK");
                    res.status(200);
                    res.json({ message : "Post creation successful" });
                }
            });
    }
};

var getPost = function(req, res){
    console.log(req.params);
    res.json({message: "not implemented"});
};

exports.postsReadAll   = postsReadAll;
exports.newPost        = newPost;
exports.getPost        = getPost;