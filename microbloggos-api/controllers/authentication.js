var passport     = require('passport');
var   User       = require("../models/User");
const bcrypt     = require("bcrypt");
const saltRounds = 10;

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function controlRForm(form) {
    var ret = "";

    if (form["name"]          === undefined || form["name"]          === "" ||
        form["email"]         === undefined || form["name"]          === "" ||
        form["password"]      === undefined || form["password"]      === "" ||
        form["password_conf"] === undefined || form["password_conf"] === "" ) {
        ret += "All fields are mandatory.\n";
    }
    else {
        if (form["name"].length < 2 || form["name"].length > 10) {
            ret += "Username: 2 to 10 characters required.\n";
        }
        if (form["password"] !== form["password_conf"]) {
            ret += "Password and password confirmation don't match.\n";
        }
        if (form["password"].length < 8 || form["password"].length > 20) {
            ret += "Password: 8 to 20 characters required.\n";
        }
        if (!validateEmail(form["email"])){
            ret += "Invalid email.\n";
        }
    }
    return ret;
}

function controlLForm(form) {
    var ret = "";
    if (form["email"]         === undefined || form["email"]         === "" ||
        form["password"]      === undefined || form["password"]      === "" ) {
        ret += "All fields are required.\n";
    }
    return ret;
}

var register = function(req, res){

    var errmsg     = "Error during registration";
    var verif_form = controlRForm(req.body);

    if (verif_form !== ""){
        console.log("ERROR: " + verif_form);
        res.status(400).send(verif_form);
    }
    else {
        bcrypt.hash(req.body["password"], saltRounds, function(err, hash) {
            if (err) {
                console.log("ERROR: " + err);
                res.status(404).send(errmsg);
            }
            else {
                new User({name: req.body["name"], email: req.body["email"], password: hash}).save(function (err, user){
                    if (err) {
                        console.log("ERROR: " + err.message);
                        if (err.code === 11000) {
                            res.status(400).send("Duplicate users");
                        }
                        else {
                            res.status(404).send(errmsg);
                        }
                    }
                    else {
                        console.log("Registration OK");
                        var token;
                        token = user.generateJwt();
                        res.status(200);
                        res.json({
                            "token" : token
                        });
                    }
                });
            }
        });
    }
};

var login = function(req, res){

    var verif_form = controlLForm(req.body);
    console.log(verif_form);
    if (verif_form !== ""){
        console.log("ERROR: " + verif_form);
        res.status(400).send(verif_form);
    }
    else {
        User.findOne({ email: req.body["email"]}, function(err, user) {
            if (err) {
                console.log(err.message);
                res.status(404).send("Error during login");
            }
            else {
                if (user === null) {
                    res.status(404).send("No user with username " + req.body["email"]);
                }
                else {
                    bcrypt.compare(req.body["password"], user.password, function(err, result) {
                        if (err) {
                            console.log(err.message);
                            res.status(400).send("Error during login");
                        }
                        else{
                            if (result) {
                                token = user.generateJwt();
                                res.status(200);
                                res.json({
                                    "token" : token
                                });
                            }
                            else{
                                res.status(400).send("Incorrect password");
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
