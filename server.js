//Regular node requires

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;


//Authentication node requires

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const mongoose = require("mongoose");
const passport = require('passport');
var session = require('express-session');


const app = express();



//set up view engine

app.set('view engine','ejs');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Initilize Authenitication Cookie

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  //cookie: { secure: true }
  cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
    }
}));


//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//set up routes

app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/passportpractice");

// Send every request to the React app
// Define any API routes before this runs

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
