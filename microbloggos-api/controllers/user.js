var   User       = require('../models/User');

var getProfile = function(req, res){
    res.send("getProfile");
};

exports.getProfile   = getProfile;