// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

// CONFIG //
var config = require('./config');



// CONTROLLERS //
var UserCtrl = require('./Server/Controllers/localAuth/UserCtrl');

// SERVICES //
var passport = require('./Server/Controllers/localAuth/passport');

//SCHEMAS

var User = require('./Server/Models/User');

// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};


// EXPRESS //
var app = express();

app.use(express.static(__dirname + './public'));

app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/users', UserCtrl.register);
app.get('/me', isAuthed, UserCtrl.me);
app.put('/users/:_id', isAuthed, UserCtrl.update);

//double auth
var userIsPracticeAdmin = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  if (req.user.userType === 'practice admin' && req.body.clinicId === req.user.clinicId) return next();
  return res.status(401).send();
};
var userIsPracticeStaff = function(req, res, next) {
   if (!req.isAuthenticated()) return res.status(401).send();
   if (req.user.userType === 'clinic staff' && req.body.clinicId === req.user.clinicId) return next();
   return res.status(401).send();
 };
var userIsBillingStaff = function(req, res, next) {
   if (!req.isAuthenticated()) return res.status(401).send();
   if (req.user.userType === 'billing staff' && req.body.clinicId === req.user.clinicId) return next();
   return res.status(401).send();
 };
var userIsBillingAdmin = function(req, res, next) {
   if (!req.isAuthenticated()) return res.status(401).send();
   if (req.user.userType === 'billing admin' && req.body.clinicId === req.user.clinicId) return next();
   return res.status(401).send();
 };

app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});


// CONNECTIONS //
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
  app.listen(port, function() {
    console.log('Listening on port '+ port);
  });
});
