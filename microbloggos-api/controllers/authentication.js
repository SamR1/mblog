var passport     = require('passport');
var   User       = require("../models/User");
const controls   = require('./control');
const bcrypt     = require("bcrypt");
const saltRounds = 10;

var register = function(req, res){

    var errmsg     = "Error during registration";
    var verif_form = controls.controlRForm(req.body);

    if (verif_form !== ""){
        console.log("ERROR: " + verif_form);
        res.status(400).json({message: verif_form});
    }
    else {
        bcrypt.hash(req.body["password"], saltRounds, function(err, hash) {
            if (err) {
                console.log("ERROR: " + err);
                res.status(404).json({message: errmsg});
            }
            else {
                new User({ username: req.body["username"], email: req.body["email"], password: hash })
                    .save(function (err, user){
                        if (err) {
                            console.log("ERROR: " + err.message);
                            if (err.code === 11000) {
                                res.status(400).json({ message: "Duplicate users"} );
                            }
                            else {
                                res.status(404).json({ message: errmsg });
                            }
                        }
                        else {
                            console.log("Registration OK");
                            var token;
                            token = user.generateJwt();
                            res.status(200);
                            res.json({ token : token });
                        }
                });
            }
        });
    }
};

var login = function(req, res){

    var verif_form = controls.controlLForm(req.body);
    if (verif_form !== ""){
        console.log("ERROR: " + verif_form);
        res.status(400).send(verif_form);
    }
    else {
        User.findOne({ email: req.body["email"] }, function(err, user) {
            if (err) {
                console.log("ERROR: " + err.message);
                res.status(404).json({message: "Error during login"});
            }
            else {
                if (user === null) {
                    res.status(404).json({ message: "No user with email " + req.body["email"] });
                }
                else {
                    bcrypt.compare(req.body["password"], user.password, function(err, result) {
                        if (err) {
                            console.log("ERROR: " + err.message);
                            res.status(400).json({ message: "Error during login" });
                        }
                        else{
                            if (result) {
                                var token = user.generateJwt();
                                res.status(200);
                                res.json({ token : token });
                            }
                            else{
                                res.status(400).json({ message: "Incorrect password" });
                            }
                        }
                    });
                }
            }
        });
    }
};

exports.register = register;
exports.login    = login;
