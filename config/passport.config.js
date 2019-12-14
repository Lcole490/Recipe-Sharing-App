var LocalStrategy = require("passport-local").Strategy;
var bcryptjs = require("bcryptjs");

const orm = require("./orm");

// function initialize(passport, findUserByEmail, findUserById) {
//   var authenticateUser = async (email, password, done) => {
  //   var user = findUserByEmail(email, result => {
  //     console.log(result);
  //     return result;
  //   });
  //   console.log(user);
  //   if (user == null) {
  //     return done(null, false, { message: "No user with that email" });
  //   }

  //   try {
  //     if (await bcryptjs.compare(password, user.password)) {
  //       return done(null, user);
  //     } else {
  //       return done(null, false, { message: "Password incorrect" });
  //     }
  //   } catch (e) {
  //     return done(e);
  //   }
  // };
  // authenticateUser
  
  passport.use(new LocalStrategy(
    { usernameField: "email" },
    function(email, password, done) {
      orm.users.findUserByEmail(email
        ).then(function(ormusers){
          if (!ormusers){
            return done(null, false, {
              message: "Incorrect email."
            });
          }
          else if (!ormusers)
        })
    }
   ));

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    return done(null, findUserById(id));
  });
}

module.exports = initialize;
