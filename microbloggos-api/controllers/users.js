var   User       = require('../models/User');

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
                res.status(500).json({message: "Internal error"});
            } else {
                if (user) {
                    res.status(200).json(user);
                } else {
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