var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var port = 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'carpediem',
    saveUninitialized: false,
    resave: false
}));

var isAuthenticated = function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        return res.status(403).send('Please login first')
    }
};


/**************** API Controller *************/
//var UserCtrl = require('./api/controllers/UserCtrl.js');
//
//
///**************** API *************/
//
//app.post('/auth/login', UserCtrl.login);
//
//app.get('/auth/logout', UserCtrl.logout);

/************ END API *************/


/*************** DB ***************/
var mongoUri = 'mongodb://localhost:27017/myTodo';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log('connected to db at ' + mongoUri)
});

app.listen(port, function() {
    console.log('I\'m watching you... Port: ' + port);
});