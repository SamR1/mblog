var User = require('../models/User');
var Post = require('../models/Post');

var usersReadAll = function(req, res){
    User.find({}, function(err, users) {
        if (err) {
            console.log(err.message);
            res.status(404).send("Error during reading all users");
        }
        else {
            if (users === null) {
                res.status(404).send("No users");
            }
            else {
                res.send(users);
            }
        }
    });
};

var usersGetOne = function(req, res){
    console.log(req.params);
    User.findOne({_id: req.params.userid})
        .exec(function(err, user) {
            if (err) {
                console.log("ERROR: " + err.message);
                res.status(500).json({message: "Internal error"});
            } else {
                if (user) {
                    Post.find({ author_id: req.params.userid }, null, { sort: { creationDate: -1} }, function(err, posts) {
                        res.status(200).json({ user: user, posts: posts });
                    })
                }
                else {
                    res.status(404).json({message: "No user with id " + req.params.userid});
                }
            }
        });
};

var usersUpdateOne = function(req, res){
    res.send("usersUpdateOne");
};

var usersDeleteOne = function(req, res){
    res.send("usersDeleteOne");
};

exports.usersReadAll   = usersReadAll;
exports.usersGetOne    = usersGetOne;
exports.usersUpdateOne = usersUpdateOne;
exports.usersDeleteOne = usersDeleteOne;