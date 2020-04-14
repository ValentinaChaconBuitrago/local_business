const passport = require("passport");
const Strategy = require("passport-local").Strategy;
var db = require("./db"); // Cambiar a Const
const MongoUtils = require("./db/MongoUtils.js"); 
const mu = MongoUtils(); 

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(
  "local-login",
  new Strategy(function (username, password, cb) {
    console.log("strategy", username, password);
    db.users.findByUsername(username, function (err, user) {
      console.log("entro al login");
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, cb) {
  cb(null, user.username);
});

passport.deserializeUser(function (id, cb) {
  db.users.findByUsername(id, function (err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'

passport.use(
  "local-signup",
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true, // allows us to pass back the entire request to the callback
    },
    function (req, username, password, cb) {
      // asynchronous
      // User.findOne wont fire unless data is sent back
      process.nextTick(function () {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        db.users.findByUsername(username, function (err, user) {
          // if there are any errors, return the error
          if (err) return cb(err);

          // check to see if theres already a user with that email
          if (user) {
            return cb(null, false, console.log("user is already taken"));
          } else {
            console.log(
              "create new user, username",
              username,
              "password:",
              password
            );


            mu.insertDocument(username, password)
              .then(() => mu.getUser(username))
              .then((user) => {
                user.map(u=>{
                  return cb(null, u);
                });
              })
              .catch((err) => console.log(err));
          }
        });
      });
    }
  )
);

const configurePassport = (app) => {
  // Use application-level middleware for common functionality, including
  // logging, parsing, and session handling.
  app.use(require("body-parser").urlencoded({ extended: true }));
  app.use(
    require("express-session")({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
    })
  );
  // Initialize Passport and restore authentication state, if any, from the
  // session.
  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports = configurePassport;
