var express   = require('express');
var router    = express.Router();
var ctrlUser  = require('../controllers/user');
var jwt       = require('express-jwt');
var token     = require('../config/token');
var auth      = jwt({
    secret: token.secret,
    userProperty: 'payload'
});


/* User */
router.get('/', auth, ctrlUser.getProfile);
router.put('/', auth, ctrlUser.updateProfile);

module.exports = router;
