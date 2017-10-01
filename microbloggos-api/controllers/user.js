var   User       = require('../models/User');
const controls   = require('./control');
const bcrypt     = require('bcrypt');
const saltRounds = 10;


var getProfile = function(req, res){
    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
        // Otherwise continue
        User.findById(req.payload._id)
            .exec(function(err, user) {
                res.status(200).json(user);
            });
    }
};

var updateProfile = function(req, res){
    console.log(req.body);
    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
        var result = controls.controlRForm(req.body);
        console.log(result);
        if (result !== '') {
            res.status(400).json({message: result});
        }
        else {
            var user = req.body;
            bcrypt.hash(user["password"], saltRounds, function(err, hash) {
                if (err) {
                    console.log("ERROR: " + err);
                    res.status(404).json({message: errmsg});
                }
                else {
                    user.password = hash;
                    User.findOneAndUpdate({_id: req.payload._id}, {$set: user}, {new: true}, function(err, user) {
                        if (err) {
                            console.log("ERROR: " + err.message);
                            res.status(500).json({message: err.message});
                        } else {
                            console.log(user);
                            res.json({message: "Update successful"})
                        }
                    });
                }
            })
        }
    }
};

exports.getProfile = getProfile;
exports.updateProfile = updateProfile;