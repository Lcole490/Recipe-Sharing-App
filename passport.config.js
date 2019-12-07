var LocalStrategy = require("passport-local").Strategy


function initialize(passport getUserByEmail){
    var authenticateuser = (email ,password, done) =>{
      var user = getUserByEmail(email)
      if (user == null){
          return done(null, false, { message: "No user with that email"})
      }

    //   try{
    //      if(await ){

    // } else{
    //     return done (null, false, { message: "Password incorrect"} )
    // }
            
    //   } catch (e){
        //   return done(e)
    //   }
    }
passport.use(new LocalStrategy({usernameField: "email" }), 
authenticateuser)
passport.serializeUser((user, done) =>{  })
passport.deserializeUser((id, done) =>{  })
}

module.exports = initialize