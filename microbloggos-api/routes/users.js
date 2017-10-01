var express   = require('express');
var router    = express.Router();
var ctrlUsers = require('../controllers/users');
var jwt       = require('express-jwt');
var token     = require('../config/token');
var auth      = jwt({
    secret: token.secret,
    userProperty: 'payload'
});


/* Users */
router.get('/', ctrlUsers.usersReadAll);
router.get('/:userid', ctrlUsers.usersGetOne);
router.put('/:userid', auth, ctrlUsers.usersUpdateOne);
router.delete('/:userid', auth, ctrlUsers.usersDeleteOne);

module.exports = router;
