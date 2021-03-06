const express = require("express");

require('dotenv').config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");

const app = express();


if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/FinalMongo2");

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 3001;

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(port, () => console.log(`Server up and running on port ${port} !`));
