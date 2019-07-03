const router = require('express').Router();
const User = require('../models/user-model');



router.get('/user', function(req, res) {
  console.log("BOOGIE");
  console.log(req.session._ctx.user)
  
  if (req.session._ctx.user){
  
  console.log(req.session._ctx.user._id);
  var userID = req.session._ctx.user._id;


  User.findOne({_id: userID}).then((currentUser) => {
      if(currentUser){
          // already have this user
          console.log('user is..... ', currentUser);
          res.json(currentUser); 
      } 
      else{
          res.send('The user does not exist'); 

      }
  });
  }
  else{
    res.json([]); 
  }

});
module.exports = router;
