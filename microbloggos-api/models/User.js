var mongoose   = require('mongoose');
var db         = require('./../config/db');
var jwt        = require('jsonwebtoken');
var token      = require('./../config/token');


var userSchema = new mongoose.Schema({
    username:  {
        type: String,
        required: true,
        unique: true},
    email: {
        type: String,
        required: true,
        unique: true },
    password: {
        type: String,
        required: true },
    creationDate: {
        type: Date,
        default: Date.now
    },
    bio: {
        type: String
    }
});

userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000)
    }, token.secret);
};

var User       = mongoose.model('User', userSchema);

module.exports = User;