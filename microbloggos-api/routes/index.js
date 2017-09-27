var express   = require('express');
var router    = express.Router();


/* Index */
router.get('/', function(req, res){
    res.send('API. No rendering page');
});

module.exports = router;
