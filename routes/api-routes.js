const router = require('express').Router();
const User = require('../models/user-model');


router.get('/users', function(req, res) {
    User.find({}, function(err, users) {
      var userMap = {};
  
      users.forEach(function(user) {
        userMap[user._id] = user;
      });
  
      res.json(userMap);  
    });
  });

module.exports = router;
