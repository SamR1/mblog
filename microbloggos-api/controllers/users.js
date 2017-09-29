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

var usersUpdateOne = function(req, res){
    res.send("usersUpdateOne");
};

var usersDeleteOne = function(req, res){
    res.send("usersDeleteOne");
};

exports.usersReadAll   = usersReadAll;
exports.usersUpdateOne = usersUpdateOne;
exports.usersDeleteOne = usersDeleteOne;