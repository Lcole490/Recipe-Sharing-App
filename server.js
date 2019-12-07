require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var simplecrypt = require("simplecrypt");
var passport = require("passport")
var flash = require("express-flash")
var flash = require("express-session")
var db = require("./models");

var initializePassport = require("./passport.config")
initializePassport(
  passport, 
  email => users.find(user => user.email === email)
);

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(flash())
app.use(session({
  secret:
}))

// Passport/Authentication

var users = []
app.set ('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.get('/', (req, res) => {
res.render('index.ejs', {name: "Nick"})
})

app.get('/login', (req, res) => {
  res.render('login.ejs', {name: "Nick"})
  })

  app.post('/regster', (req, res) => {
  
  })

app.get('/register', (req, res) => {
  res.render('register.ejs', {name: "Nick"})
  })

app.post('/regster', async (req, res) => {
   try{
     var hashedPassword = simplecrypt.hash(req.body.password)
   }catch{

   }
   req.body.email
})

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
