var   User       = require('../models/User');


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

exports.getProfile = getProfile;