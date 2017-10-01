var express   = require('express');
var router    = express.Router();
var ctrlPosts = require('../controllers/posts');
var jwt       = require('express-jwt');
var token     = require('../config/token');
var auth      = jwt({
    secret: token.secret,
    userProperty: 'payload'
});


/* Users */
router.get('/:id', auth, ctrlPosts.getPost);
router.get('/', auth, ctrlPosts.postsReadAll);
router.put('/', auth, ctrlPosts.newPost);


module.exports = router;