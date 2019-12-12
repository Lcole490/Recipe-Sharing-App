if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express");
const router = express.Router();
const orm = require("../config/orm.js");
const holidayDB = require("../config/connection");

// ===== PAGE ROUTES ===== //
require("dotenv").config();
const bcryptjs = require("bcryptjs");
const passport = require("passport")
const flash = require("express-flash")
const session = require("express-session")
const methodOverride = require('method-override')
const app = express();

const initializePassport = require("../config/passport.config")
initializePassport(
  passport, 
  email => users.find(users => users.email === email),
  id => users.find(user => user.id === id)
);

//<--------Authentication code--------->//
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'))

//Login 
// router.get('/',  (req, res) => {
//   res.render('index', {name: "Nick"})
//   });

router.get('/login', (request, response) => {
  response.render('login')
  });
  router.post('/login',checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  }));  
  router.get('/register', checkNotAuthenticated, (request, response) => {
    response.render('register', {name: "Nick"})
    })
  
  router.post('/register', checkNotAuthenticated, async (request, response) => {
     try{
       const hashedPassword = await bcryptjs.hash(holidayDB.request.body.password, 10)
       holidayDB.addUser({
         userName: req.body.userName,
         password: hashedPassword,
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
        
       })
      
       response.redirect('/login')
     }catch{
       response.redirect('/register')
     }
  });
  
  router.delete('/logout', (request, response) => {
    request.logOut()
    response.redirect('/login')
  });

router.post('/login',checkNotAuthenticated, passport.authenticate('local', {
successRedirect: '/',
failureRedirect: '/login',
failureFlash: true,
}));  

function checkAuthenticated(request, response, next) {
if (request.isAuthenticated()) {
  return next()
}

response.redirect('/login');
};

function checkNotAuthenticated(request, response, next) {
if (request.isAuthenticated()) {
 return response.redirect('/')
}

return next();
};


//<--------- End of Authentication code--------->//

// Homepage
router.get("/", (request, response) => {
  orm.selectAll("recipes", rows => {
    response.render("index", { recipe: rows });
  });
});

// Single recipe
router.get("/recipe/:id", (request, response) => {
  orm.selectFullRecipe(request.params.id, recipe => {
    orm.selectRecipeComments(request.params.id, comments => {
      recipe.comments = comments;
      recipe.num_comments = comments.length;
      response.render("recipe", { recipe });
    });
  });
});

// Recipe form
router.get("/add-recipe", (request, response) => {
  response.render("add-recipe");
});

// ===== API ROUTES ===== //

// ----- Viewing/Fetching Data --- //

// All recipes from recipes table
router.get("/api/recipes", (request, response) => {
  orm.selectAll("recipes", rows => {
    response.json(rows);
  });
});

// Single recipe from recipes table
router.get("/api/recipes/:id", (request, response) => {
  orm.selectFullRecipe(request.params.id, rows => {
    response.json(rows);
  });
});

// All comments for single recipe from comments
router.get("/api/recipe-comments/:id", (request, response) => {
  orm.selectRecipeComments(request.params.id, comments => {
    response.json(comments);
  });
});

// All users from users table
router.get("/api/users", (request, response) => {
  orm.selectAll("users", rows => {
    response.json(rows);
  });
});

// All comments from comments table
router.get("/api/comments", (request, response) => {
  orm.selectAll("comments", rows => {
    response.json(rows);
  });
});

// ----- ADD (POST) & CHANGE DATA (PUT) ----- //

// add-recipe
router.post("/add-recipe", (request, response) => {
  const data = request.body;
  const {
    first_name,
    last_name,
    email,
    title,
    main_ingredient,
    ingredients,
    directions,
    category
  } = request.body;
  orm.findUserByEmail(email, rows => {
    if (rows.length) {
      const { user_id } = rows[0];
      orm.addRecipeKnownUser(
        [title, main_ingredient, ingredients, directions, category, user_id],
        result => {
          console.log(result);
        }
      );
      response.redirect("/");
    }

    if (!rows.length) {
      let user_id;
      orm.addUser([first_name, last_name, email], result => {
        user_id = result.insertId;
        orm.addRecipeKnownUser(
          [title, main_ingredient, ingredients, directions, category, user_id],
          result => {
            console.log(result);
          }
        );
      });
      response.redirect("/");
    }
  });
});

// ===== 404 Page ===== //

router.get("*", (request, response) => {
  response.render("404");
});

module.exports = router;
