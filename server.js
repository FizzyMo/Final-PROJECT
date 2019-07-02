const express = require("express");

require('dotenv').config();

const path = require("path");
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const apiRoutes = require('./routes/api-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');


//const keys = require('./config/keys');
const PORT = process.env.PORT || 3001;


const app = express();

// set view engine
app.set('view engine', 'ejs');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs


// set up session cookies
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://react-app:UABootcamp@newsapp-krufv.mongodb.net/test?retryWrites=true&w=majority");



// set up routes
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
