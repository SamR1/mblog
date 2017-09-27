var express   = require('express');
var router    = express.Router();
var ctrlAuth  = require('../controllers/authentication');

/* Index */
router.get('/', function(req, res){
    res.json({ message: 'API. No rendering page' });
});

/* Authentication */
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;