var Post = require('../models/Post');
var User = require('../models/User');

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
                        new Post({ message: req.body.message, author: [user] })
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
                    } else {
                        res.status(404).json({message: "No user with id " + req.params.userid});
                    }
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