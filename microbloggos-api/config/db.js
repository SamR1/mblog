var mongoose     = require("mongoose");
var startPitchDB = "mongodb://localhost/microbloggos";

// DATABASE
mongoose.connect(startPitchDB, {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));