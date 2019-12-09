if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var bcryptjs = require("bcryptjs");
var passport = require("passport")
var flash = require("express-flash")
var session = require("express-session")
var methodOverride = require('method-override')

var db = require("./models");

var initializePassport = require("./passport.config")
initializePassport(
  passport, 
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport/Authentication

var users = []
app.set ('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', checkAuthenticated, (req, res) => {
res.render('index.ejs', {name: "Nick"})
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs', {name: "Nick"})
  });

app.post('/login',checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));  

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs', {name: "Nick"})
  })

app.post('/register', checkNotAuthenticated, async (req, res) => {
   try{
     const hashedPassword = await bcryptjs.hash(req.body.password, 10)
     users.push({
       id: Date.now().toString(),
       name: req.body.name,
       email: req.body.email,
       password: hashedPassword,
     })
     console.log (users)
     res.redirect('/login')
   }catch{
     res.redirect('/register')
   }
});

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login');
};

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
   return res.redirect('/')
  }

  return next();
};

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars" ,);

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
