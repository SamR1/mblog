var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var passport     = require('passport');

require('./config/passport');

var index = require('./routes/index');
var auth  = require('./routes/auth');
var user  = require('./routes/user');
var users = require('./routes/users');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.use('/', index);
app.use('/api/', auth);
app.use('/api/profile', user);
app.use('/api/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.status(err.status).json({error: err.message});
    next(err);
});

// catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
