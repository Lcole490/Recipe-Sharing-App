const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const handlebars = require("express-handlebars");
const recipeRoutes = require("./controllers/recipes-controller.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(recipeRoutes);

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const server = app.listen(port, () => {
  console.log(`Running on ${server.address().address}${server.address().port}`);
});

// =====
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// require("dotenv").config();
// const bcryptjs = require("bcryptjs");
// const passport = require("passport");
// const flash = require("express-flash");
// const session = require("express-session");
// const methodOverride = require("method-override");

// const initializePassport = require("./config/passport.config");
// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
// );

// //<--------Authentication code--------->//
// app.use(flash());
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(methodOverride('_method'))

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next()
//   }

//   res.redirect('/login');
// };

// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//    return res.redirect('/')
//   }

//   return next();
// };

//<--------- End of Authentication code--------->//
